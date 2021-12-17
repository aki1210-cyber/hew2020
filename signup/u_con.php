<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<?php
    session_start();
    if( !isset($_POST['id']) || $_POST['id'] === '' ){
        header('Location: user.php');
        exit;
    }
    require('u_fun.php');


    if($_POST){
    $_SESSION['id'] = $_POST['id'];
    $_SESSION['mail'] = $_POST['mail'];
    $_SESSION['remail'] = $_POST['remail'];
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['name_kana'] = $_POST['name_kana'];



    Vinput($_POST['id'],'id');
    Vinput($_POST['password'],'password');
    Vinput($_POST['repassword'],'repassword');
    Vinput($_POST['mail'],'mail');
    Vinput($_POST['remail'],'remail');
    Vinput($_POST['school'],'school');
    Vinput($_POST['faculty'],'faculty');
    Vinput($_POST['subject'],'subject');
    Vinput($_POST['name'],'name');
    Vinput($_POST['name_kana'],'name_kana');
    Vinput($_POST['pref'],'pref');


    


    if(empty($_SESSION['error']['id'])){
        Vid($_POST['id'],'id');
        if(empty($_SESSION['error']['id'])){
            VdupId($_POST['id'],'id');
        }
    }

    if(empty($_SESSION['error']['password'])){
        Vpass($_POST['password'],'password');
    }

    if(empty($_SESSION['error']['repassword'])){
        Vmatch($_POST['repassword'],'repassword',$_POST['password']);
    }

    if(empty($_SESSION['error']['mail'])){
        Vmail($_POST['mail'],'mail');
        if(empty($_SESSION['error']['mail'])){
            Vdupmail($_POST['mail'],'mail');
        }
    }


    if(empty($_SESSION['error']['remail'])){
        Vmatch($_POST['remail'],'remail',$_POST['mail']);
    }


    if(isset($_SESSION['error'])){
        header('Location:user.php');
        exit;
    }

    }

    

?>

</head>
<body>
<h1>確認画面</h1>
    学籍：<?= $_POST['id']  ?><br>
    パスワード：<?= $_POST['password']  ?><br>
    メールアドレス：<?= $_POST['mail']  ?><br>
    学校：<?= $_POST['school']  ?><br>
    学部学科：<?= $_POST['faculty'],"学部",$_POST['subject'],"学科"  ?><br>
    入学：
    <?php 
    
    echo $_POST['s_year'],"年",$_POST['s_month'],"月";
    ?><br>
    名前：<?= $_POST['name']  ?><br>
    名前（フリガナ）：<?= $_POST['name_kana']  ?><br>
    誕生日：<?= $_POST['b_year'],"年", $_POST['b_month'] ,"月", $_POST['b_day'],"日" ?><br>
    性別：<?= $_POST['gender']  ?><br>
    出身：<?= $_POST['pref']  ?><br>

<form action="u_cre.php" method="POST">
<?php $adtime = $_POST['s_year'].$_POST['s_month']; 
    $birthday = $_POST['b_year'].$_POST['b_month'].$_POST['b_day'];
?>
<input type='hidden' name='id' value='<?php echo $_POST['id'] ?>'>
<input type='hidden' name='password' value='<?php echo $_POST['password'] ?>'>
<input type='hidden' name='mail' value='<?php echo $_POST['mail'] ?>'>
<input type='hidden' name='school' value='<?php echo $_POST['school'] ?>'>
<input type='hidden' name='faculty' value='<?php echo $_POST['faculty'] ?>'>
<input type='hidden' name='subject' value='<?php echo $_POST['subject'] ?>'>
<input type='hidden' name='adtime' value='<?php echo $adtime ?>'>
<input type='hidden' name='name' value='<?php echo $_POST['name'] ?>'>
<input type='hidden' name='name_kana' value='<?php echo $_POST['name_kana'] ?>'>
<input type='hidden' name='birthday' value='<?php echo $birthday ?>'>
<input type='hidden' name='gender' value='<?php echo $_POST['gender'] ?>'>
<input type='hidden' name='pref' value='<?php echo $_POST['pref'] ?>'>




<?php
    // $school = $_POST['school'];
    // $school = Cschool($school);
    // $faculty = $_POST['faculty'];
    // $faculty = Cfaculty($faculty);
    // $subject = $_POST['subject'];
    // $subject = Csubject($subject);
    // $dept_id = $school.$faculty.$subject;
    // echo $dept_id;
?>

<input type="submit" value="登録">
</form>



</body>
</html>


