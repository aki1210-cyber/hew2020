<?php
session_start();
try {
  $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
  //会員情報取得
  $sql1 = "SELECT * FROM students INNER JOIN faculty ON students.dept_id = faculty.id WHERE students.id = :id";
  $stmt1 = $dbh->prepare($sql1);
  $stmt1->bindValue(':id',$_GET['id']);
  $stmt1->execute();
  $row1 = $stmt1->fetch(PDO::FETCH_ASSOC);

  //販売実績取得
  $sql2 = "SELECT transactions.products_id, products.image, products.name FROM transactions INNER JOIN products ON transactions.products_id = products.id JOIN members ON members.id = products.members_id WHERE products.members_id = :id";
  $stmt2 = $dbh->prepare($sql2);
  $stmt2->bindValue(':id',$_GET['id']);
  $stmt2->execute();
  $row2 = $stmt2->fetchALL(PDO::FETCH_ASSOC);

  //会員情報
  $img = "user_upload/".$row1["image"];
  $name = $row1["name"];
  $name_kana = $row1["name_kana"];
  $comment = $row1["comment"];
  $faculty_name = $row1["faculty_name"];
  $subject = $row1["subject"];

//お気に入りユーザー登録
  if(isset($_POST["fav_button"])) {
    $sql3 = "INSERT INTO favorite_users(members_id,favorite_users_id) VALUES(:members_id,:favorite_users_id)";
    $stmt3 = $dbh->prepare($sql3);
    $stmt3->bindValue(':members_id',$_SESSION['USER_ID']);
    $stmt3->bindValue(':favorite_users_id',$_GET["id"]);
    $flags = $stmt3->execute();
    if($flags){
      $favset_mess = "お気に入りに追加しました。";
    }else{
      $favset_mess = "すでに追加されています。";
      // var_dump($flags);
      // var_dump($dbh->errorCode());
      // var_dump($dbh->errorInfo());
      // echo $_SESSION['USER_ID'];
      // echo $_GET['id'];
    }
  }

} catch (\Exception $e) {
  echo $e->getMessage().PHP_EOL;
}

 ?>
<?php require('../common/header.php'); ?>

  <div class="prof_box">
 
    <!-- ユーザーサムネイル表示 -->
    <div class="view_prof_wrap">
      <img class="u_img" src="../images/user/<?php echo $row1["image"]; ?>" alt="サムネイル" width="400" height="300">
      <div class="view_prof_wrap">
          <p>学科:<?php echo $faculty_name.$subject ?></p>
          <p>ユーザー名:<?php echo $name; ?></p>
    </div>
      </div>
    <!-- コメント表示 -->
    <div class="view_prof_right">
    <form class="view_prof_favbox" method="post">
      <?php if(isset($favset_mess)){
        echo $favset_mess;
      }?>
        <p>&star;</p><button type="submit" name="fav_button">お気に入りユーザーへ登録</button>
    </form>
    <p class="view_comment">
    <?php echo nl2br($comment); ?>
    </p>
    </div>

    
  </div><!--prof_box-->


  <div class="container">
  
  <div class="prof_link_box">
    <p class ="prof_view_link">販売実績</p>
  </div>

    <div class="view_prof_items">
      <?php
        //print_r($row4);
        foreach ($row2 as $transaction) {
          print("<p class='view_item_product'>
                    <a href='../product/view.php?id=".$transaction["products_id"]."'>
                      <img src='../images/product/".$transaction["image"]."'>".$transaction["name"]."</a></p>");
        }
      ?>
    </div>

    </div><!--container-->
  </body>
</html>
