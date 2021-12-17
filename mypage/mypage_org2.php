<?php
  session_start();
  try {
    $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
    //会員情報取得
    $sql1 = "SELECT * FROM students INNER JOIN faculty ON students.dept_id = faculty.id WHERE students.id = :id";
    $stmt1 = $dbh->prepare($sql1);
    $stmt1->bindValue(':id',$_SESSION['USER_ID']);
    $stmt1->execute();
    $row1 = $stmt1->fetch(PDO::FETCH_ASSOC);

    //お気に入り商品取得
    $sql2 = "SELECT products_id, image, name, price, information FROM favorite_products INNER JOIN products ON favorite_products.products_id = products.id WHERE favorite_products.members_id = :id" ;
    $stmt2 = $dbh->prepare($sql2);
    $stmt2->bindValue(':id',$_SESSION['USER_ID']);
    $stmt2->execute();
    $row2 = $stmt2->fetchALL(PDO::FETCH_ASSOC);

    //お気に入りユーザー取得
    $sql3 = "SELECT image, name, comment FROM favorite_users INNER JOIN members ON favorite_users.favorite_uers_id = members.id JOIN students ON members.id = students.id WHERE favorite_users.members_id = :id";
    $stmt3 = $dbh->prepare($sql3);
    $stmt3->bindValue(':id',$_SESSION['USER_ID']);
    $stmt3->execute();
    $row3 = $stmt3->fetchALL(PDO::FETCH_ASSOC);

    //お気に入りユーザー取得
    $sql4 = "SELECT transactions.products_id, products.image, products.name FROM transactions INNER JOIN products ON transactions.products_id = products.id JOIN members ON members.id = products.members_id WHERE products.members_id = :id";
    $stmt4 = $dbh->prepare($sql4);
    $stmt4->bindValue(':id',$_SESSION['USER_ID']);
    $stmt4->execute();
    $row4 = $stmt4->fetchALL(PDO::FETCH_ASSOC);

//
  } catch (\Exception $e) {
    echo $e->getMessage().PHP_EOL;
  }
  //会員情報
  $id = $_SESSION["USER_ID"];
  $adtime = $row1["adtime"];
  $img = "user_upload/".$row1["image"];
  $name = $row1["name"];
  $name_kana = $row1["name_kana"];
  $birthday = $row1["birthday"];
  $gender = $row1["gender"];
  $birthplace = $row1["birthplace"];
  $comment = $row1["comment"];
  $faculty_name = $row1["faculty_name"];
  $subject = $row1["subject"];

?>

<?php include("../common/header.php"); ?>


  <div class="prof_box">
    <!-- ユーザーサムネイル表示 -->
    <div class="prof_wrap">
      <img class="u_img" src="../images/<?php echo $row1["image"]; ?>" alt="サムネイル" width="400" height="300">
      <p class="u_change"><a href="\cocno\common\comm_renew.php">プロフィール編集</a></p>
    </div>
    <!-- コメント表示 -->
    <p class="u_comment"><?php echo $comment; ?></p>
  </div><!--prof_box-->


  <div class="container">

  <div class="prof_link_box">
    <p class ="prof_link">会員情報</p>
    <p class ="prof_link">販売実績</p>
    <p class ="prof_link">お気に入りリスト</p>
    <p class ="prof_link">お気に入りユーザー</p>
    <p class ="prof_link"><a href="\cocno\shuppin\shuppin.php">商品出品</a></p>
    <p class ="prof_link"><a href="">商品管理</a></p>
  </div>






    <div>
      <table>
        <tr>
          <td>ID</td><td><?php echo $id; ?></td>
        </tr>
        <tr>
          <td>パスワード変更</td><td><button><a href="../common/pass_renew.php">パスワード変更</a></button></td>
        </tr>
        <tr>
          <td>学校入学年月</td><td><?php echo $adtime; ?></td>
        </tr>
        <tr>
          <td>学部</td><td><?php echo $faculty_name; ?></td>
        </tr>
        <tr>
          <td>学科</td><td><?php echo $subject; ?></td>
        </tr>
        <tr>
          <td>名前</td><td><?php echo $name; ?></td>
        </tr>
        <tr>
          <td>名前(カナ)</td><td><?php echo $name_kana; ?></td>
        </tr>
        <tr>
          <td>生年月日</td><td><?php echo $birthday; ?></td>
        </tr>
        <tr>
          <td>性別</td><td><?php echo $gender; ?></td>
        </tr>
        <tr>
          <td>出身地</td><td><?php echo $birthplace; ?></td>
        </tr>
      </table>
    </div>

    <div>
      <?php
        //print_r($row4);
        foreach ($row4 as $transaction) {
          echo "<p><a href='../view.php?id=".$transaction["products_id"]."'>";
          print("<img src='../images/".$transaction["image"]."'>");
          print($transaction["name"]);
          print("</a></p>");
        }
      ?>
    </div>


    <div>
      <?php
        //print_r($row2);
        foreach ($row2 as $favorite_product) {
          echo "<p><a href='../view.php?id=".$favorite_product["products_id"]."'>";
          print("<img src='../images/".$favorite_product["image"]."'>");
          print($favorite_product["name"]);
          print($favorite_product["information"]);
          print("</a></p>");
        }
      ?>
    </div>

    <div>
      <?php
        // print_r($row3);
        foreach ($row3 as $favorite_user) {
          print("<p>");
          print("<img src='images/".$favorite_user["image"]."' width='300' height='300'>");
          print($favorite_user["name"]);
          print($favorite_user["comment"]);
          print("</p>");
        }
      ?>
    </div>


    </div><!--container-->
  </body>
</html>
