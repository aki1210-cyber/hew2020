<?php
  session_start();
  try {
    $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
    //会員情報取得
    $sql1 = "SELECT * FROM companies INNER JOIN members ON members.id = companies.id WHERE companies.id = :id";
    $stmt1 = $dbh->prepare($sql1);
    $stmt1->bindValue(':id',$_GET["id"]);
    $stmt1->execute();
    $row1 = $stmt1->fetch(PDO::FETCH_ASSOC);

//お気に入りユーザー登録
if (isset($_POST["button"])) {
  $sql3 = "INSERT INTO favorite_users(members_id, favorite_users_id) VALUES(:members_id, :favorite_users_id)";
  $stmt3 = $dbh->prepare($sql3);
  $stmt3->bindValue(':members_id',$_SESSION['USER_ID']);
  $stmt3->bindValue(':favorite_users_id',$_GET["id"]);
  $flag = $stmt3->execute();
  if($flag){
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
  //会員情報
  $company = $row1["company"];
  $comment = $row1["comment"];
  $url = $row1["url"];

?>

<?php include("../common/header.php"); ?>

  <div class="prof_box">
    <!-- ユーザーサムネイル表示 -->
    <div class="prof_wrap">
      <img class="u_img" src="../images/company/<?php echo $row1["image"]; ?>" alt="サムネイル" width="400" height="300">
      
    </div>
    <!-- コメント表示 -->
    <div class="view_prof_right">
    <form class="fav_box" method="post">
    <?php if(isset($favset_mess)){
        echo $favset_mess;
      }?>
      <p class="fav_icon">&star;</p><button type="submit" name="button">お気に入りユーザーへ登録</button>
      </form>
    <p class="view_comment"><?php echo $comment; ?></p>
  </div>
  </div><!--prof_box-->


  <div class="container">

  <div class="prof_link_box">
    <p class ="prof_view_link">会員情報</p>
  </div>






    <div class="view_prof_items company_view_info">
        <p>会社名:<?php echo $company; ?></p>
        <p>住所:<?php echo $row1['postal_code']." ".$row1['address']; ?></p>
        <p>企業URL:<?php echo $url; ?></p>
    </div>



    </div><!--container-->
  </body>
</html>
