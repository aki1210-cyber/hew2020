<?php
  session_start();

  $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8','root');
  //会員情報取得
  // $sql = "SELECT products.id, products.name AS title, 
  // students.name, products.price, categories.name AS category, 
  // products.list_at, products.image, products.information 
  // FROM products 
  // INNER JOIN members ON products.members_id = members.id 
  // JOIN students ON members.id = students.id 
  // JOIN categories ON categories.id = products.categories_id WHERE products.id = :id";
  // $stmt = $dbh->prepare($sql);
  // $stmt->bindValue(':id',$_GET["id"]);
  // $stmt->execute();
  // $row = $stmt->fetch(PDO::FETCH_ASSOC);
  // var_dump($row);
  // $fee = 100;//手数料
  // $total_price = $fee + $row["price"];//合計金額

  $sql = "SELECT members_id,students.name as uname,products.name as sname,categories_id,information,price,list_at,products.image as simage FROM products JOIN students 
  WHERE products.id = :id AND products.members_id = students.id";
  $stmt = $dbh->prepare($sql);
  $stmt->bindValue(':id',$_GET["id"]);
  $stmt->execute();
  $row = $stmt->fetch(PDO::FETCH_ASSOC);
  // var_dump($row);
?>
