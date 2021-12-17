
<?php
session_start();

$id = $_SESSION['USER_ID'];
$bord_id = $_POST['bord_id'];
$title = $_POST['title'];
$comment = $_POST['comment'];
$create_at = date("Y/m/d H:i:s");

try {
	// DBへ接続
    $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');

    $sql = "SHOW TABLE STATUS LIKE 'threads'";
    $statement = $dbh->prepare($sql);
    $statement->execute();
    $row = $statement->fetch(PDO::FETCH_ASSOC);
    $auto_increment = $row["Auto_increment"];


    $sql = "INSERT INTO threads(boards_id,members_id,title,create_at) VALUES (:boards_id,:members_id,:title,:create_at)";
    $statement = $dbh->prepare($sql);
    $statement->bindParam(':boards_id',$bord_id);
    $statement->bindParam(':members_id',$id);
    $statement->bindParam(':title',$title);
    $statement->bindParam(':create_at',$create_at);
    $statement->execute();

    $sql = "INSERT INTO answers(threads_id,members_id,comment,post_at) VALUES (:threads_id,:members_id,:comment,:post_at)";
    $statement = $dbh->prepare($sql);
    $statement->bindParam(':threads_id', $auto_increment);
    $statement->bindParam(':members_id',$id);
    $statement->bindParam(':comment',$comment);
    $statement->bindParam(':post_at',$create_at);
   
    $statement->execute();


    header('Location:../bord/bord.php');
    exit;

} catch(PDOException $e) {
	echo $e->getMessage();
	die();
}

    ?>
    <?php
    require('../common/header.php');
    ?>
<p>投稿完了</p>   
<div>
<a href="bord.php">掲示板一覧へ戻る</a>
</div> 
</body>
</html>