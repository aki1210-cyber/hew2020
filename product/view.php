<?php include('../common/product.php'); ?>
<?php
  if (isset($_POST["button"])) {
    $sql2 = "INSERT INTO favorite_products(members_id, products_id) VALUES(:members_id, :products_id)";
    $stmt2 = $dbh->prepare($sql2);
    $stmt2->bindValue(':members_id',$_SESSION['USER_ID']);
    $stmt2->bindValue(':products_id',$_GET["id"]);
    $flags = $stmt2->execute();
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


  $sql = "SELECT products_id FROM transactions WHERE transactions.products_id = :id";
  $stmt = $dbh->prepare($sql);
  $stmt->bindValue(':id',$_GET["id"]);
  $stmt->execute();
  $checkone = $stmt->fetch(PDO::FETCH_ASSOC);
?>

<?php include("../common/header.php"); ?>

<div class="container">

<div class="view_container_wrap">

  <div class="view_left">
    <img class="view_icon" src="../images/product/<?php echo $row["simage"]; ?>" alt="商品画像">
    <form class="fav_box" method="post">
      <?php if(isset($favset_mess)){
        echo $favset_mess;
      }?>
    <p class="fav_icon">&star;</p><button type="submit" name="button">欲しいものリストへ登録</button>
    </form>


  </div>

  <div class="view_right">
    <table>
      <tr>
        <td class="view_title" colspan="2"><?php echo $row["sname"] ?></td>
      </tr>
      <tr>
        <th>出品者</th><td><a href="../mypage/mypage_view.php?id=<?= $row["members_id"]; ?>"><?php echo $row["uname"]; ?></a></td>
      </tr>
      <tr>
        <th>カテゴリ</th><td><?php
        switch($row["categories_id"]){
          case 1:
            $categories = "HAL";
            break;
          case 2:
          $categories = "MODE";
            break;
          case 3:
          $categories = "IKOU";
            break;
          default;
        }
        echo $categories; ?></td>
      </tr>
      <tr>
        <th>商品価格</th><td><?php echo "&yen;", number_format($row["price"]); ?></td>
      </tr>
      <tr>
        <th>出品日時</th><td><?php
        $list_data = date('Y年m月d日H時間i分',strtotime($row["list_at"]));
         echo $list_data;
         ?></td>
      </tr>
    </table>

    </div>
  </div>
<a class="view_more" href="#view_infolink">詳細を見る</a>

</div><!--container-->
<div class="container">

<p id="view_infolink" class="view_infomation"><?php echo nl2br($row["information"]); ?></p>


    <?php
    if($checkone){
    echo "<p class='view_buy_button'>完売</p>";
    }else{
      echo "<a class='view_buy_button' href='../buy/buy.php?id=".$_GET["id"]."'>購入</a>";
    }
    ?>
  </div>
  </body>
</html>
