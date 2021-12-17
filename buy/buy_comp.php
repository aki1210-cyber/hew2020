<?php
  require('../common/product.php'); 

    $sql2 = "SELECT products_id FROM transactions WHERE products_id = :products_id";
    $stmt2 = $dbh->prepare($sql2);
    $stmt2->bindValue(':products_id',$_GET["id"]);
    $stmt2->execute();
    $flagd = $stmt2->fetch(PDO::FETCH_ASSOC);
    if($flagd){
      header('location:../product/top.php');
      exit;
    }


  $total_price = 100;
    //現在時刻取得
    $date = date("Y-m-d H:i:s");
    $sql2 = "INSERT INTO transactions(products_id, members_id, trade_at, price) VALUES(:products_id, :members_id, :trade_at, :price)";
    $stmt2 = $dbh->prepare($sql2);
    $stmt2->bindValue(':products_id',$_GET["id"]);
    $stmt2->bindValue(':members_id',$_SESSION['USER_ID']);
    $stmt2->bindValue(':trade_at',$date);
    $stmt2->bindValue(':price',$total_price);
    $flag = $stmt2->execute();
    if($flag){
      $buy_mess = "購入";
    }else{
      $buy_mess = "失敗";
    }
 ?>
<?php  
  require('../common/header.php');

 
?>

<div class="container">
  <div class="comp_cont_wrap">
  <p>購入完了しましたメールをご確認ください</p>
  <a href="../product/top.php">トップページへ</a>
  </div>
</div>
</body>
</html>
