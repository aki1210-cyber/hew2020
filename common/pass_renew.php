<?php require("../common/function.php"); ?>
<?php
  if(isset($_POST["pass_renew"])){
        session_start();
        //DBから更新前パスワード取得
        try {
          $pdo = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
          $stmt1 = $pdo->prepare('select password from members where id = ?');
          $stmt1->execute([$_SESSION['USER_ID']]);
          $row1 = $stmt1->fetch(PDO::FETCH_ASSOC);
          $check_pass = $row1["password"];
          // print($check_pass);
          // print($_POST["fo_password"]);
          // var_dump($_POST["fo_password"]);
          // var_dump($check_pass);
        } catch (\Exception $e) {
          echo $e->getMessage() . PHP_EOL;
        }
        //パスワード整合性チェック
        if(empty($err_msg['fo_pass'])){
          if($_POST["fo_password"] != $check_pass){
            $err_msg["fo_pass"] = "パスワードが違います";
          }
        }

        //新しいパスワードのチェック<--うまくいってない
        $new_pass = $_POST["password"];
        if(empty($err_msg['new_pass'])){
          validpassword($new_pass,'new_pass');
        }
        //再度入力チェック<--うまくいってない
        if(empty($err_msg['re_pass'])){
            Matchpassword($_POST["password"],'re_pass',$_POST["re_password"]);
        }

        //DBのパスワード更新
        if(empty($err_msg["fo_pass"]) && empty($err_msg["re_pass"])){
          try {
            $pdo = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
            $stmt2 = $pdo->prepare('update members set password = ? where id = ?');
            $flag = $stmt2->execute([$_POST["re_password"],$_SESSION['USER_ID']]);
            if ($flag) {
              print("OK");
            }else{
              print("NO");
            }

          } catch (\Exception $e) {
            echo $e->getMessage() . PHP_EOL;
          }
        }
      }
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form method="post">
      更新前パスワード：<input type="text" name="fo_password" value="<?php if( !empty($_POST['fo_pass']) ){ echo $_POST['fo_pass']; } ?>"><br>
      <?php
              if(!empty($err_msg['fo_pass'])){
                  print "<p>".$err_msg['fo_pass']."</p>"
                  ;}
      ?>
      更新パスワード：<input type="text" name="password" value="<?php if( !empty($_POST['pass']) ){ echo $_POST['pass']; } ?>"><br>
      <?php
              if(!empty($err_msg['pass'])){
                  print "<p>".$err_msg['pass']."</p>"
                  ;}
      ?>

      更新パスワード（確認）：<input type="text" name="re_password"><br>
      <?php
              if(!empty($err_msg['re_pass'])){
                  print "<p>".$err_msg['re_pass']."</p>"
                  ;}
      ?>
      <button type="submit" name="pass_renew">パスワード更新</button>
    </form>
  </body>
</html>
