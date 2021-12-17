<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php

session_start();
//直リンクチェック
if( !isset($_POST['id']) || $_POST['id'] === '' ){
    header('Location: user.php');
    exit;
}

require('u_fun.php');

$id = $_POST['id'];
$password = $_POST['password'];
$mail = $_POST['mail'];
// $school = $_POST['school'];
$faculty = $_POST['faculty'];
$subject = $_POST['subject'];
$adtime = $_POST['adtime'];
$name = $_POST['name'];
$name_kana = $_POST['name_kana'];
$birthday = $_POST['birthday'];
$gender = $_POST['gender'];
$pref = $_POST['pref'];

    // $school = Cschool($school);
    $faculty = Cfaculty($faculty);
    $subject = Csubject($subject);
    $dept_id = $faculty.$subject;
    $password = password_hash($password,PASSWORD_DEFAULT);

//db登録
try {
	// DBへ接続
	$dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');

	// SQL作成
	// $sql = "INSERT INTO schools(name) VALUES (:school)";
    // $statement = $dbh->prepare($sql);
    // $statement->bindParam(':school',$school);
    // $statement->execute();
    
    // $sql ="INSERT INTO faculty(schools_id,faculty_name,subject,adtime) VALUES (:schools_id,:faculty,:subject,:adtime)";
    // $statement = $dbh->prepare($sql);
    // $statement->bindParam(':schools_id',$school);
    // $statement->bindParam(':faculty',$faculty);
    // $statement->bindParam(':subject',$subject);
    // $statement->bindParam(':adtime',$adtime);
    // $statement->execute();

    $sql = "INSERT INTO members(id,password,mail) VALUES (:id,:password,:mail)";
    $statement = $dbh->prepare($sql);
    $statement->bindParam(':id',$id);
    $statement->bindParam(':password',$password);
    $statement->bindParam(':mail',$mail);
    $statement->execute();

    $sql = "INSERT INTO students(id,dept_id,adtime,name,name_kana,birthday,gender,birthplace) 
    VALUES (:id,:dept_id,:adtime,:name,:name_kana,:birthday,:gender,:birthplace)";
    $statement = $dbh->prepare($sql);
    $statement->bindParam(':id',$id);
    $statement->bindParam(':dept_id',$dept_id);
    $statement->bindParam(':adtime',$adtime);
    $statement->bindParam(':name',$name);
    $statement->bindParam(':name_kana',$name_kana);
    $statement->bindParam(':birthday',$birthday);
    $statement->bindParam(':gender',$gender);
    $statement->bindParam(':birthplace',$pref);
    $statement->execute();

    

    

    

    

    

} catch(PDOException $e) {
	echo $e->getMessage();
	die();
}
?>
</head>
<body>
<p>登録完了</p>
<a href='../index.php'>戻る</a>
</body>
</html>



