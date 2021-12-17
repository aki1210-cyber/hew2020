<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php
session_start();
//直リンクチェック
if( !isset($_POST)){
    header('Location: user.php');
    exit;
}


require('u_fun.php');

$mail = $_POST['mail'];
$company = $_POST['company'];
$name = $_POST['name'];
$name_kana = $_POST['name_kana'];
$department = $_POST['department'];
$tel = $_POST['tel'];
$postal_code = $_POST['postal_code'];
$addr21 = $_POST['addr21'];
$Rid = Rid();

$password = Rid();
$hash_password = password_hash($password,PASSWORD_DEFAULT);
$id = RdupId($Rid);


try {
	// DBへ接続
    $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');

    $sql = "INSERT INTO members(id,password,mail) VALUES (:id,:password,:mail)";
    $statement = $dbh->prepare($sql);
    $statement->bindParam(':id',$id);
    $statement->bindParam(':password',$hash_password);
    $statement->bindParam(':mail',$mail);
    $statement->execute();

    $sql = "INSERT INTO companies(id,company,name,name_kana,tel,address,department,postal_code) VALUES (:id,:company,:name,:name_kana,:tel,:address,:department,:postal_code)";
    $statement = $dbh->prepare($sql);
    $statement->bindParam(':id',$id);
    $statement->bindParam(':company',$company);
    $statement->bindParam(':name',$name);
    $statement->bindParam(':name_kana',$name_kana);
    $statement->bindParam(':tel',$tel);
    $statement->bindParam(':address',$addr21);
    $statement->bindParam(':department',$department);
    $statement->bindParam(':postal_code',$postal_code);
    $statement->execute();


} catch(PDOException $e) {
	echo $e->getMessage();
	die();
}

?>


</head>
<body>
    <p>登録完了</p>
    <?= $password; ?>
</body>
</html>

