<?php
session_start();
//直リンクチェック
if( !isset($_POST['id']) ){
    $_SESSION['error'] = "不正アクセス。";
    header('Location: index.php');
    exit;
}

//validetion check
if( $_POST['id'] === '' ){
    $_SESSION['error'] = "IDは必須入力項目です。";
    header('Location: index.php');
    exit;
}

?><!doctype html>
<html lang='ja'>
    <head></head>
    <body>
        <h1>確認画面</h1>
        <p><?php echo $_POST['id']?></p>
        <form method='post' action='user_create.php'>
            <input type='hidden' name='id' value='<?php echo $_POST['id'] ?>'>
            <input type="submit" value="登録">
        </form>
    </body>
</html>
