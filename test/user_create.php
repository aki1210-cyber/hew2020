<?php
session_start();
//直リンクチェック
if( !isset($_POST['id']) || $_POST['id'] === '' ){
    header('Location: index.php');
    exit;
}

//DB登録

?>
<p>登録完了</p>
<a href='index.php'>戻る</a>

