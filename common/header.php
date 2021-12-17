<?php
 if(!isset($_SESSION["USER_ID"])){
   header( "Location: http://localhost/cocno/session_err.php" ) ;
 }
if (strstr($_SESSION["USER_ID"], "CO")) {
  $mypagelink = "mypage_company";
}else{
  $mypagelink = "mypage";
}
// print($_SESSION["USER_ID"]);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/cocno/css/reset.css">
    <link rel="stylesheet" href="/cocno/css/bord.css">
    <link rel="stylesheet" href="/cocno/css/header.css">
    <link rel="stylesheet" href="/cocno/css/style.css">
    <link rel="stylesheet" href="/cocno/css/mypage.css">
    <link rel="stylesheet" href="/cocno/css/top.css">
    <link rel="stylesheet" href="/cocno/css/view.css">
    <link rel="stylesheet" href="/cocno/css/buy.css">
    <link rel="stylesheet" href="/cocno/css/newthread.css">
    <link rel="stylesheet" href="/cocno/css/conthread.css">
    <link rel="stylesheet" href="/cocno/css/thread.css">
    <link rel="stylesheet" href="/cocno/css/mypage_view.css">
    <link rel="stylesheet" href="/cocno/css/mypage_company.css">
    <link rel="stylesheet" href="/cocno/css/mypage_company_view.css">
    <link rel="stylesheet" href="/cocno/css/top_search.css">
    <link rel="stylesheet" href="/cocno/css/shuppinn.css">
    <link rel="stylesheet" href="/cocno/css/slick.css">
    <link rel="stylesheet" href="/cocno/css/slick-theme.css">
    <script src="/cocno/js/jquery-3.5.1.min.js"></script>
    <script src="/cocno/js/top/top.js"></script>
    <script src="/cocno/js/bord/bord.js"></script>
    <script src="/cocno/js/prof_change.js"></script>
    <script src="/cocno/js/header.js"></script>
    <script src="/cocno/js/slick.min.js"></script>
    <script src="/cocno/js/slide.js"></script>

    <title>Cocno</title>
</head>
<body>
<header>
<div class="h_wrap">
        <h1><img src="/cocno/images/site/sitelogo.png" alt="COCNOLOGO">COCNO</h1>

            <form method="POST" action="http://localhost/cocno/product/top_search.php" class="header_serch_form">
                <input class="serch_text" type="text" name="title">
                <input class="serch_logo" type="image" src="/cocno/images/site/serchicon.png" alt="検索">
            </form>

        <div class="icon_box">
            <img id ="pulldown_icon" src="/cocno/images/site/pulldown.png" alt="">
            <ul id ="pulldown_box">
                <li id="pulldown_close">閉じる</li>
                <li id="logout"><a href="http://localhost/cocno/login/logout.php">ログアウト</a></li>
            </ul>
        </div>
</div><!--h_wrap-->

<div class="h_box">
    <div class="h_wrap h_nav">
        <nav>
            <ul class="links">
                <li><a href="/cocno/product/top.php">TOP</a></li>
                <li><a href="/cocno/bord/bord.php">BORD</a></li>
                <li><a href="/cocno/mypage/<?php echo $mypagelink; ?>.php">MYPAGE</a></li>
                <li><a href="/cocno/contact/contact.php">CONTACT</a></li>
                <li><a href="/cocno/skyway-conf-master/docs/index.html">MEET</a></li>
            </ul>
        </nav>
    </div>
</div>
</header>
