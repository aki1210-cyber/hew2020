<?php
session_start();
require("../common/header.php");
?>

<?php
$dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
//会員情報取得
$sql = "SELECT id,image,name,price FROM products WHERE products.name LIKE :name ORDER BY list_at DESC";
$stmt = $dbh->prepare($sql);
$stmt->bindValue(":name","%".$_POST['title']."%");
$stmt->execute();
$row = $stmt->fetchAll(PDO::FETCH_ASSOC);
$products = $row;


// $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
// var_dump($dbh->errorCode());
// var_dump($dbh->errorInfo());

// var_dump($row);
?>
<div class="container">
  <div class="content_item_box">
<?php

if(empty($products)){
  echo "<p>検索に当てはまる商品はありません。</p>";
}
      foreach ($products as $product) {
        print("<a class='top_content_item serch_content_item' href='view.php?id=".$product["id"]."'>"."<img src='../images/product/".$product["image"]."'>"."<br>".$product["name"]."<br>&yen;".$product["price"]."<br></a>");
       }
?>
</div>
</div>
</body>
</html>
