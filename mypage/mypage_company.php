<?php
session_start();
if(isset($_POST["comm_renew"])){
  $comm = $_POST["comment"];
  // $image = $_FILES['image']['name'];
  $image = uniqid(mt_rand(), true);//ファイル名をユニーク化
  $ext = substr(strrchr($_FILES['image']['name'], '.'), 1);
  $image .= '.' . $ext;//アップロードされたファイルの拡張子を取得
  if(preg_match("/\.(png|jpg)$/",$image)){
    $file = "../images/company/$image";
    if (!empty($_FILES['image']['name'])) {//ファイルが選択されていれば$imageにファイル名を代入
      move_uploaded_file($_FILES['image']['tmp_name'], '../images/company/' . $image);//imagesディレクトリにファイル保存
        if (exif_imagetype($file)) {//画像ファイルかのチェック
          $message = '画像をアップロードしました';
          //元の画像のサイズを取得する
          list($w, $h) = getimagesize($file);
          //元画像の縦横の大きさを比べてどちらかにあわせる
          // なおかつ縦横の差をコピー開始位置として使えるようセット
          if($w > $h){
              $diff  = ($w - $h) * 0.5;
              $diffW = $h;
              $diffH = $h;
              $diffY = 0;
              $diffX = $diff;
          }elseif($w < $h){
              $diff  = ($h - $w) * 0.5;
              $diffW = $w;
              $diffH = $w;
              $diffY = $diff;
              $diffX = 0;
          }elseif($w === $h){
              $diffW = $w;
              $diffH = $h;
              $diffY = 0;
              $diffX = 0;
          }
          //サムネイルのサイズ
          $thumbW = 300;
          $thumbH = 300;
          //var_dump($file);
          //サムネイルになる土台の画像を作る
          $thumbnail = imagecreatetruecolor($thumbW, $thumbH);
          if($ext == "jpg"){
            //元の画像を読み込む
            $baseImage = imagecreatefromjpeg($file);
            //サムネイルになる土台の画像に合わせて元の画像を縮小しコピーペーストする
            imagecopyresampled($thumbnail, $baseImage, 0, 0, $diffX, $diffY, $thumbW, $thumbH, $diffW, $diffH);
            //圧縮率60で保存する
            imagejpeg($thumbnail, $file, 60);
          }else{
            //元の画像を読み込む
            $baseImage = imagecreatefrompng($file);
            //サムネイルになる土台の画像に合わせて元の画像を縮小しコピーペーストする
            imagecopyresampled($thumbnail, $baseImage, 0, 0, $diffX, $diffY, $thumbW, $thumbH, $diffW, $diffH);
            //圧縮率60で保存する
            imagepng($thumbnail, $file, 6);
          }
        } else {
          $message = '画像ファイルではありません';
          print($file);
        }
      }
    }else {
      $message = '画像ファイルではありません';
    }
  try {
    $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
    $stmt = $dbh->prepare('update companies set comment = :comm, image = :image where id = :id');
    $stmt->bindValue(':comm',$comm);
    $stmt->bindValue(':image',$image);
    $stmt->bindValue(':id',$_SESSION['USER_ID']);
//      $stmt->execute([$comm,$image,$_SESSION['USER_ID']]);
    $flag = $stmt->execute();
    if($flag){
      print("OK");
    }else{
      print("NO");
    }
  } catch (\Exception $e) {
    echo $e->getMessage() . PHP_EOL;
  }
}

  try {
    $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
    //会員情報取得
    $sql1 = "SELECT * FROM companies INNER JOIN members ON members.id = companies.id WHERE companies.id = :id";
    $stmt1 = $dbh->prepare($sql1);
    $stmt1->bindValue(':id',$_SESSION['USER_ID']);
    $stmt1->execute();
    $row1 = $stmt1->fetch(PDO::FETCH_ASSOC);

    //お気に入りリスト削除
    if (isset($_POST["delete_p"])) {
      $sql5 = "DELETE FROM favorite_products WHERE members_id = :members_id AND products_id = :products_id";
      $stmt5 = $dbh->prepare($sql5);
      $stmt5->bindValue(':members_id',$_SESSION['USER_ID']);
      $stmt5->bindValue(':products_id',$_POST["delete_p"]);
      $stmt5->execute();
    }

        //お気に入りユーザー削除
    if (isset($_POST["delete_u"])) {
      $sql6 = "DELETE FROM favorite_users WHERE members_id = :members_id AND favorite_users_id = :favorite_users_id";
      $stmt6 = $dbh->prepare($sql6);
      $stmt6->bindValue(':members_id',$_SESSION['USER_ID']);
      $stmt6->bindValue(':favorite_users_id',$_POST["delete_u"]);
      $flag = $stmt6->execute();
      // if($flag){
      //   print("OK");
      // }else{
      //   print("NO");
      // }
    }

    //お気に入り商品取得
    $sql2 = "SELECT products_id, image, name, price, information FROM favorite_products INNER JOIN products ON favorite_products.products_id = products.id JOIN members ON products.members_id = members.id WHERE favorite_products.members_id = :id AND products.delete_at IS NULL AND members.delete_at IS NULL" ;
    $stmt2 = $dbh->prepare($sql2);
    $stmt2->bindValue(':id',$_SESSION['USER_ID']);
    $stmt2->execute();
    $row2 = $stmt2->fetchALL(PDO::FETCH_ASSOC);

    //お気に入りユーザー取得
    $sql3 = "SELECT favorite_users_id, students.image as s_image, students.name as s_name, students.comment as s_comment, companies.company as c_name, companies.image as c_image, companies.comment as c_comment FROM favorite_users INNER JOIN members ON favorite_users.favorite_users_id = members.id LEFT OUTER JOIN students ON members.id = students.id LEFT OUTER JOIN companies ON members.id = companies.id WHERE favorite_users.members_id = :id AND members.delete_at IS NULL";
    $stmt3 = $dbh->prepare($sql3);
    $stmt3->bindValue(':id',$_SESSION['USER_ID']);
    $stmt3->execute();
    $row3 = $stmt3->fetchALL(PDO::FETCH_ASSOC);
    // var_dump($row3);

  } catch (\Exception $e) {
    echo $e->getMessage().PHP_EOL;
  }
  //会員情報
  $id = $_SESSION["USER_ID"];
  $company = $row1["company"];
  $name = $row1["name"];
  $name_kana = $row1["name_kana"];
  $department = $row1["department"];
  $tel = $row1["tel"];
  $comment = $row1["comment"];
  $address = $row1["address"];
  $url = $row1["url"];
  $postal_code = $row1["postal_code"];
  $mail  =$row1["mail"];
  // print_r($row1);
  // var_dump($row1);

?>

<?php require('../common/header.php'); ?>

  <div class="prof_box">
    <!-- ユーザーサムネイル表示 -->
    <div class="prof_wrap">
      <img class="u_img" src="../images/company/<?php echo $row1["image"]; ?>" alt="サムネイル" width="400" height="300">
      <p class="mypage_prof_change_box"><a id="prof_change_button">プロフィール編集</a></p>

    </div>
    <!-- コメント表示 -->
    <p class="u_comment"><?php echo nl2br($comment); ?></p>
  </div><!--prof_box-->

 

  <!-- モーダルウインドウ -->
  <div id="mask" class="hidden">
  <form id="prof_change_form" action="mypage_company.php" method="post" enctype="multipart/form-data">
      <div id="prof_change_form_wrap">
        <label id="prof_image_label" for="prof_select_image">画像選択</label><input id="prof_select_image" type="file" name="image" placeholder="aaa">
        <textarea id="prof_change_comment" type="text" name="comment" placeholder="自己紹介"></textarea>
      </div>
        <button><input type="submit" name="comm_renew" value="更新"></button>
    </form>
    <div id="close">
      閉じる
    </div>
  </div>


  <div class="container">
  <div class="prof_overwrap">

  <div class="prof_link_box">
    <p id="prof_p1" class ="prof_link">会員情報</p>
    <p id="prof_p2" class ="prof_link">お気に入りリスト</p>
    <p id="prof_p3" class ="prof_link">お気に入りユーザー</p>
  </div>


    <div id="prof_p1_box" class="prof_pbox">
      <table>
        <tr>
          <td>ID</td><td><?php echo $id; ?></td>
        </tr>
        <tr>
          <td>パスワード変更</td><td><button><a href="../common/pass_renew.php">パスワード変更</a></button></td>
        </tr>
        <tr>
          <td>会社名</td><td><?php echo $company; ?></td>
        </tr>
        <tr>
          <td>担当者名</td><td><?php echo $name; ?></td>
        </tr>
        <tr>
          <td>担当者名（カナ）</td><td><?php echo $name_kana; ?></td>
        </tr>
        <tr>
          <td>所属部署</td><td><?php echo $department; ?></td>
        </tr>
        <tr>
          <td>電話番号</td><td><?php echo $tel; ?></td>
        </tr>
        <tr>
          <td>メールアドレス</td><td><?php echo $mail; ?></td>
        </tr>
        <tr>
          <td>所在地</td><td><?php echo $address; ?></td>
        </tr>
        <tr>
          <td>企業URL</td><td><?php echo $url; ?></td>
        </tr>
      </table>
    </div>



    <div id="prof_p2_box">
      <?php
        //print_r($row2);
        $p_cnt=0;
        foreach ($row2 as $favorite_product) {
          echo "<div class='p3_box_wrap'><p><a href='../product/view.php?id=".$favorite_product["products_id"]."'>";
          print("<img src='../images/product/".$favorite_product["image"]."'>");
          print($favorite_product["name"]);
          print("</a>");
          print("</p>");
          print("<form method='post'><button id='delete' type='submit' name='delete_p' value='".$favorite_product["products_id"]."'>削除</button></form></div>");
        }
      ?>
    </div>

    <div id="prof_p3_box">
      <?php
        //print_r($row3);
        foreach ($row3 as $favorite_user) {

          if (strstr($favorite_user["favorite_users_id"], "CO")) {
            $mypagelink = "mypage_company";
          }else{
            $mypagelink = "mypage";
          }

          print("<div class='p3_box_wrap'><p><a href='".$mypagelink."_view.php?id=".$favorite_user["favorite_users_id"]."'>");
          
          if($favorite_user["s_image"]){
            print("<img src='../images/user/".$favorite_user["s_image"]."'>");
          }
          if($favorite_user["s_name"]){
            print($favorite_user['s_name']);
          }
          
          if($favorite_user["c_image"]){
            print("<img src='../images/user/".$favorite_user["c_image"]."'>");
          }
          if($favorite_user["c_name"]){
            print($favorite_user["c_name"]);
          }
          
          print("</a>");
          print("</p>");
          print("<form method='post'><button id='delete' type='submit' name='delete_u' value='".$favorite_user["favorite_users_id"]."'>削除</button></form></div>");
        }
      ?>
    </div>

      </div><!--prof_overwrap-->
    </div><!--container-->
  </body>
</html>
