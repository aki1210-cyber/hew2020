<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/reset.css">
    <script src="/cocno/js/jquery-3.5.1.min.js"></script>
    <script src="/cocno/js/index.js"></script>
    <script src="/cocno/js/submitmail.js"></script>
    <script src="/cocno/js/three.min.js"></script>
    <script src="/cocno/js/OrbitControls.js"></script>

    <title>Document</title>

<?php
    session_start();
    $err = "";
    if(isset($_SESSION['error_message'])){
        $error_message = $_SESSION['error_message'];
        unset($_SESSION['error_message']);
    }
?>
</head>
<body>
<div class="segment">
  <canvas id="cube"></canvas><!--ロゴ表示領域-->
<h1><a href="admin/admin_index.php">Welcome to Cocno</a></h1>

  </div>
                <?php  if(isset($error_message)) echo "<p class='er_message'>".$error_message."</p>"; ?>

                    <form class="login login_form" action="login/login.php" method="POST">
                    <label>
                        <input type="text" name="id" placeholder="Id">
                    </label>

                    <label>
                        <input type="text" name="password" placeholder="Password">
                    </label>
                            <button type="submit" class="red">
                            <i class="icon ion-md-lock"></i>
                            Login
                            <!-- <img src="images/site/logo2.png"> -->
                            </button>

                    <div class="form_wrap">
                        <p><a id="signup_link" >Signup</a></p>
                        <p><a>Contact</a></p>
                    </div><!--form_wrap-->
                    </form>





                    <form class="login" id="sub" action="signup/signsend.php" method="POST" >
                        <p>メールアドレスを入力してください</p>
                        <input id="email" type="email" name="sendmail">
                        <div class="sub_wrap">
                        <button id="mailsend" type="button">送信</button>
                        <button id="signup_close" type="button">閉じる</button>
                        </div>
                    </form>
</body>
</html>
