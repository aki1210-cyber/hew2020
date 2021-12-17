<?php
if(!isset($_SESSION["ADMIN_ID"])){
  header( "Location: http://localhost/cocno/admin/admin_index.php" ) ;
}
session_start();
  $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
  //商品削除（論理削除）
  if(isset($_POST["delete_p"])){
    $date = date("Y-m-d H:i:s");
    $sql = "UPDATE products SET delete_at = :delete_at WHERE id = :id";
    $stmt = $dbh->prepare($sql);
    $stmt->bindValue(':delete_at',$date);
    $stmt->bindValue(':id',$_POST["delete_p"]);
    $stmt->execute();
    $_POST["product_btn"] = true;
    $_POST["members_id"] = $_SESSION["members_id"];
  }
  //商品復元
  if(isset($_POST["restore_p"])){
    $sql = "UPDATE products SET delete_at = NULL WHERE id = :id";
    $stmt = $dbh->prepare($sql);
    $stmt->bindValue(':id',$_POST["restore_p"]);
    $stmt->execute();
    $_POST["product_btn"] = true;
    $_POST["members_id"] = $_SESSION["members_id"];
  }
  //ユーザー削除（論理削除）
  if(isset($_POST["delete_m"])){
    $date = date("Y-m-d H:i:s");
    $sql = "UPDATE members SET delete_at = :delete_at WHERE id = :id";
    $stmt = $dbh->prepare($sql);
    $stmt->bindValue(':delete_at',$date);
    $stmt->bindValue(':id',$_POST["delete_m"]);
    $stmt->execute();
    $_POST["user_btn"] = true;
    $_POST["members_id"] = $_SESSION["members_id"];
  }
  //ユーザー復元
  if(isset($_POST["restore_m"])){
    $sql = "UPDATE members SET delete_at = NULL WHERE id = :id";
    $stmt = $dbh->prepare($sql);
    $stmt->bindValue(':id',$_POST["restore_m"]);
    $stmt->execute();
    $_POST["user_btn"] = true;
    $_POST["members_id"] = $_SESSION["members_id"];
  }
  //掲示板投稿削除（論理削除）
  if(isset($_POST["delete_t"])){
    $a = strpos($_POST["delete_t"], ":");
    $threads_id=substr($_POST["delete_t"], 0, $a);
    $answers_id=substr($_POST["delete_t"], $a+1);
    //print($threads_id.":".$answers_id);
    $date = date("Y-m-d H:i:s");
    $sql = "UPDATE answers SET delete_at = :delete_at WHERE id = :id AND threads_id = :threads_id";
    $stmt = $dbh->prepare($sql);
    $stmt->bindValue(':delete_at',$date);
    $stmt->bindValue(':id',$answers_id);
    $stmt->bindValue(':threads_id',$threads_id);
    $stmt->execute();
    $_POST["board_btn"] = true;
    $_POST["members_id"] = $_SESSION["members_id"];
  }
  //掲示板復元
  if(isset($_POST["restore_t"])){
    $a = strpos($_POST["restore_t"], ":");
    $threads_id=substr($_POST["restore_t"], 0, $a);
    $answers_id=substr($_POST["restore_t"], $a+1);
    $sql = "UPDATE answers SET delete_at = NULL WHERE id = :id AND threads_id = :threads_id";
    $stmt = $dbh->prepare($sql);
    $stmt->bindValue(':id',$answers_id);
    $stmt->bindValue(':threads_id',$threads_id);
    $stmt->execute();
    $_POST["board_btn"] = true;
    $_POST["members_id"] = $_SESSION["members_id"];
  }

  //商品情報取得
  if(isset($_POST["product_btn"])){
    $sql = "SELECT * FROM products  WHERE members_id = :members_id";
    $stmt = $dbh->prepare($sql);
    $stmt->bindValue(':members_id',$_POST["members_id"]);
    $stmt->execute();
    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $products = $row;
    //var_dump($products);
    $_SESSION["members_id"] = $_POST["members_id"];
  }
  //会員情報取得
  if(isset($_POST["user_btn"])){
    $sql = "SELECT * FROM students INNER JOIN faculty ON students.dept_id = faculty.id INNER JOIN members ON students.id = members.id WHERE students.id = :id";
    $stmt = $dbh->prepare($sql);
    $stmt->bindValue(':id',$_POST["members_id"]);
    $stmt->execute();
    $row2 = $stmt->fetch(PDO::FETCH_ASSOC);
    $members = $row2;
    //var_dump($members);
    $_SESSION["members_id"] = $_POST["members_id"];
    //会員情報
    $adtime = $members["adtime"];
    $img = $members["image"];
    $name = $members["name"];
    $name_kana = $members["name_kana"];
    $birthday = $members["birthday"];
    $gender = $members["gender"];
    $birthplace = $members["birthplace"];
    $comment = $members["comment"];
    $faculty_name = $members["faculty_name"];
    $subject = $members["subject"];
  }
  //掲示板投稿取得
  if(isset($_POST["board_btn"])){
    $sql = "SELECT answers.id AS id, answers.threads_id AS threads_id, boards.name AS name, threads.title AS title, answers.comment AS comment, answers.post_at AS post_at, answers.delete_at AS delete_at FROM answers INNER JOIN threads ON threads.id = answers.threads_id INNER JOIN boards ON boards.id = threads.boards_id WHERE answers.members_id = :members_id";
    $stmt = $dbh->prepare($sql);
    $stmt->bindValue(':members_id',$_POST["members_id"]);
    $stmt->execute();
    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $boards = $row;
    //var_dump($boards);
    $_SESSION["members_id"] = $_POST["members_id"];
  }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/admin.css">

    <script src="../js/jquery-3.5.1.min.js"></script>
    <script src="../js/bord/bord.js"></script>
    <script src="../js/script.js"></script>
    <title>Cocno</title>
</head>
<body>
<div class="container">
    <?php
    if(isset($products)){
      print("<div class='content_item_box'>");
      foreach ($products as $product) {
        print("<a class='top_content_item' href='#'>"."<img src='../images/product/".$product["image"]."' width='80px' height='80px'>"."<br>".$product["name"]."<br>&yen;".$product["price"]."<br>");
        if(isset($product["delete_at"])){
          print("<p class='delete'>削除済み</p>");
          print("<form action='admin.php' method='post'><button type='submit' name='restore_p' value='".$product["id"]."'>復元</button></form>");
        }
        if(!isset($product["delete_at"])){
          print("<form action='admin.php' method='post'><button type='submit' name='delete_p' value='".$product["id"]."'>削除</button></form>");
        }
        print("</a>");
       }
       print("</div>");
    }
    ?>
    <?php
    if(isset($members)){
      print("<div class='user_box'>");
      print("<p><img class='u_img' src='../images/user/".$img."' alt='サムネイル' width='200' height='200'></p>");
      print("<div class='user_infomation'>");
      print("<p>".$name_kana."</p>");
      print("<p>".$adtime."</p>");
      print("<p>".$birthday."</p>");
      print("<p>".$birthplace."</p>");
      print("<p>".$gender."</p>");
      print("<p>".$comment."</p>");
      print("<p>".$faculty_name."</p>");
      print("<p>".$comment."</p>");
      print("</div>");
      if(!isset($members["delete_at"])){
        print("<form action='admin.php' method='post'><button type='submit' name='delete_m' value='".$_POST["members_id"]."'>削除</button></form>");
      }
      if(isset($members["delete_at"])){
        print("<p class='delete'>削除済み</p>");
        print("<form action='admin.php' method='post'><button type='submit' name='restore_m' value='".$_POST["members_id"]."'>復元</button></form>");
      }
      print("</div>");
    }
    ?>
    <?php
    if(isset($boards)){
      print("<div class='content_board_box'>");
      foreach ($boards as $answer) {
        print("<div class='board_content'>");
        print("<p>掲示板名：".$answer["name"]."</p>");
        print("<p>スレッド名：".$answer["title"]."</p>");
        print("<p>返信内容：".$answer["comment"]."</p>");
        print("<p>".$answer["post_at"]."</p>");
        if(isset($answer["delete_at"])){
          print("<p class='delete'>削除済み</p>");
          print("<form action='admin.php' method='post'><button type='submit' name='restore_t' value='".$answer["threads_id"].":".$answer["id"]."'>復元</button></form>");
        }
        if(!isset($answer["delete_at"])){
          print("<form action='admin.php' method='post'><button type='submit' name='delete_t' value='".$answer["threads_id"].":".$answer["id"]."'>削除</button></form>");
        }
        print("</div>");
       }
       print("</div>");
    }
    ?>
  </div>
    <div class="a_wrap">
    <div class="admin_form">
    <form class="admin_input" action="admin.php" method="post">
      商品検索:会員ID入力<input type="text" name="members_id">
      <input type="submit" name="product_btn" value="検索">
    </form>
    <form class="admin_input" action="admin.php" method="post">
      掲示板検索:会員ID入力<input type="text" name="members_id">
      <input type="submit" name="board_btn" value="検索">
    </form>
    <form class="admin_input" action="admin.php" method="post">
      ユーザー検索:会員ID入力<input type="text" name="members_id">
      <input type="submit" name="user_btn" value="検索">
    </form>
  </div>
  </div>
</div>
</div>
  </body>
</html>
