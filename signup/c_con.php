<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php
    session_start();
    if( !isset($_POST)){
        header('Location: ../index.php');
        exit;
    }
    require('u_fun.php');

    if($_POST){
        $_SESSION['mail'] = $_POST['mail'];
        $_SESSION['remail'] = $_POST['remail'];
        $_SESSION['name'] = $_POST['name'];
        $_SESSION['name_kana'] = $_POST['name_kana'];
        $_SESSION['company'] = $_POST['company'];
        $_SESSION['department'] = $_POST['department'];
        $_SESSION['tel'] = $_POST['tel'];
        $_SESSION['zip21'] = $_POST['zip21'];
        $_SESSION['zip22'] = $_POST['zip22'];
        $_SESSION['addr21'] = $_POST['addr21'];

    
        Vinput($_POST['mail'],'mail');
        Vinput($_POST['remail'],'remail');
        Vinput($_POST['name'],'name');
        Vinput($_POST['name_kana'],'name_kana');
        Vinput($_POST['mail'],'mail');
        Vinput($_POST['company'],'company');
        Vinput($_POST['department'],'department');
        Vinput($_POST['tel'],'tel');
        Vinput($_POST['zip21'],'pos_error');
        Vinput($_POST['zip22'],'pos_error');


        if(empty($_SESSION['error']['mail'])){
            Vmail($_POST['mail'],'mail');
            if(empty($_SESSION['error']['mail'])){
                Vdupmail($_POST['mail'],'mail');
            }
        }

        if(empty($_SESSION['error']['remail'])){
            Vmatch($_POST['remail'],'remail',$_POST['mail']);
        }

        if(empty($_SESSION['error']['tel'])){
            Vtel($_POST['tel'],'tel');
        }

        if(empty($_SESSION['error']['pos_error'])){
            Vpos($_POST['zip21'],'pos_error');
            Vpos($_POST['zip22'],'pos_error');
        }
        

        if(isset($_SESSION['error'])){
            header('Location:user.php');
            exit;
        }

        $postal_code = $_POST['zip21'].$_POST['zip22'];


    }

    ?>
</head>
<body>
   メールアドレス：<?= $_POST['mail'] ?><br>
   会社/事業者名：<?= $_POST['company'] ?><br>
   お名前：<?= $_POST['name'] ?><br>
   フリガナ：<?= $_POST['name_kana'] ?><br>
   部署：<?= $_POST['department'] ?><br>
   電話番号：<?= $_POST['tel'] ?><br>
   郵便番号：<?= $_POST['zip21']."-".$_POST['zip22'] ?><br>
   住所：<?= $_POST['addr21'] ?><br>

   <form action="c_cre.php" method="POST">
   <input type='hidden' name='mail' value='<?php echo $_POST['mail'] ?>'>
    <input type='hidden' name='company' value='<?php echo $_POST['company'] ?>'>
    <input type='hidden' name='name' value='<?php echo $_POST['name'] ?>'>
    <input type='hidden' name='name_kana' value='<?php echo $_POST['name_kana'] ?>'>
    <input type='hidden' name='department' value='<?php echo $_POST['department'] ?>'>
    <input type='hidden' name='tel' value='<?php echo $_POST['tel'] ?>'>
    <input type='hidden' name='postal_code' value='<?php echo $postal_code ?>'>
    <input type='hidden' name='addr21' value='<?php echo $_POST['addr21'] ?>'>
    <input type="submit" value="登録">

   </form>


</body>
</html>