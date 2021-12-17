<?php

session_start();

$f_str = "CO";

 if($_POST){
    try {
      $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
      $sql = "SELECT * FROM members WHERE id = :id";
      $statement = $dbh->prepare($sql);
      $statement->bindparam(':id',$_POST['id']);
      $statement->execute();
      $row = $statement->fetch(PDO::FETCH_ASSOC);

      if(is_numeric($row['id'])){
        $sql = "SELECT * FROM students WHERE id = :id";
        $statement = $dbh->prepare($sql);
        $statement->bindparam(':id',$_POST['id']);
        $statement->execute();
        $cow = $statement->fetch(PDO::FETCH_ASSOC);
      }else{
        $sql = "SELECT * FROM companies WHERE id = :id";
        $statement = $dbh->prepare($sql);
        $statement->bindparam(':id',$_POST['id']);
        $statement->execute();
        $cow = $statement->fetch(PDO::FETCH_ASSOC);
      }

    } catch (\Exception $e) {
      echo $e->getMessage() . PHP_EOL;
    }

    //削除済みのユーザーをログインさせない
    if(!isset($row['delete_at'])){
      //ユーザーIDがDB内に存在しているか確認
      if(isset($row['id'])){
          if (password_verify($_POST['password'],$row['password'])) {
              $_SESSION['USER_ID'] = $row['id'];
              if(is_numeric($cow['id'])){
                  $_SESSION['USER_NAME'] = $cow['name'];
              }else{
                  $_SESSION['USER_NAME'] = $cow['company'].":".$cow['name'];
              }
              header('Location: \cocno\product\top.php');
          }else{
              $_SESSION['error_message'] = "パスワードが違います";
          }

      }else{
          $_SESSION['error_message'] = "IDが違います";
      }

  }else{
    $_SESSION['error_message'] = "削除済み";
  }
  if(isset($_SESSION['error_message'])){
      header('Location: ../index.php');
  }

}

?>
