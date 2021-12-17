<?php
session_start();
  $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
  //会員情報取得
  // $sql = "SELECT products.id,products.image,students.name,products.price FROM products INNER JOIN members ON products.members_id = members.id JOIN students ON members.id = students.id";
  $sql = "SELECT products.id,categories_id,image,name,price FROM products INNER JOIN members ON members.id = products.members_id WHERE products.delete_at IS NULL AND members.delete_at IS NULL ORDER BY list_at DESC";
  $stmt = $dbh->prepare($sql);
  $stmt->execute();
  $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $products = $row;
  // var_dump($products);
?>

<?php
include('../common/header.php');
?>

<div class="container">

  <div class="slide">
    <div class="slide_wrap">
      <div>
        <img src="../images/site/content1.jpg" alt="">
      </div>
      <div>
        <img src="../images/site/content2.png" alt="あ">
      </div>
      <div>
        <img src="../images/site/content3.png" alt="い">
      </div>
      <div>
        <img src="../images/site/content4.png" alt="う">
      </div>
    </div>
  </div>
</div>

<div class="col">
<div class="container">

  <h2 class="top_h2">Product of someone</h2>

  <div class="top_category">
    <p id="cate_hal">HAL</p>
    <p id="cate_mode">MODE</p>
    <P id="cate_ikou">IKOU</P>
  </div>

  <div class="content_item_box">
      <?php
        foreach ($products as $product) {
          print("<a class='top_content_item cate".$product['categories_id']."' href='view.php?id=".$product["id"]."'>"."<img src='../images/product/".$product["image"]."'>"."<br>".$product["name"]."<br>&yen;".number_format($product["price"])."<br></a>");
         }
      ?>
  </div>
</div>
</div>
  </body>
</html>
