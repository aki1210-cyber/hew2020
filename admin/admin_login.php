<?php

session_start();

$f_str = "CO";

 if($_POST){
    try {
      $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
      $sql = "SELECT * FROM admins WHERE id = :id";
      $statement = $dbh->prepare($sql);
      $statement->bindparam(':id',$_POST['id']);
      $statement->execute();
      $row = $statement->fetch(PDO::FETCH_ASSOC);


    } catch (\Exception $e) {
      echo $e->getMessage() . PHP_EOL;
    }



    //ユーザーIDがDB内に存在しているか確認
    if(isset($row['id'])){
        if (password_verify($_POST['password'],$row['password'])) {
            $_SESSION['ADMIN_ID'] = $row['id'];
            header('Location: admin.php');
        }else{
            $_SESSION['error_message'] = "パスワードが違います";
        }

    }else{
        $_SESSION['error_message'] = "ID違います";
    }

    if(isset($_SESSION['error_message'])){
        header('Location: admin_index.php');
    }
}


?>
