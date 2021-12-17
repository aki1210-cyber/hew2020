<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cocno</title>
    <?php session_start(); ?>
</head>
<body>
<?="ユーザー:",$_SESSION['USER_ID']?>
    <h1>ログイン後画面</h1>
    <p>商品一覧</p>
    <div>
    <a href="bord/bord.php">掲示板</a>
    </div>
    <div>
    <a href="login/logout.php">ログアウト</a>
    </div>
</body>
</html>