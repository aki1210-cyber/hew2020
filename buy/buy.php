<?php  
 require('../common/product.php'); 

  require('../common/header.php'); 
?>
    <?php
    $fee = 120;
    $total_price = $fee + $row["price"];



   
    ?>
    <div class="container">
      <table class="buy_wrap">
        <tr>
          <th>商品画像</th><td><img src="../images/product/<?php echo $row["simage"]; ?>" alt="商品画像"></td>
        </tr>
        <tr>
          <th>商品名</th><td><?php echo $row["sname"] ?></td>
        </tr>
        <tr>
          <th>手数料</th><td>&yen;<?php echo number_format($fee); ?></td>
        </tr>
        <tr>
          <th>合計金額</th><td>&yen;<?php echo number_format($total_price); ?></td>
        </tr>
      </table>
      <div class="buy_button_box">
      <a class="buy_button" href="buy_comp.php?id=<?php echo $_GET["id"];?>">購入</a>
      </div>
    </div>
  </body>
</html>
