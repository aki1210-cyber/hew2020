<?php
session_start();

$dsn = "mysql:host=localhost; dbname=cocno; charset=utf8";
$username = "root";
$password = "";
  if (isset($_POST["submit"])) {

  $image = uniqid();//ファイル名をユニーク化
  $ext = substr(strrchr($_FILES['image']['name'], '.'), 1);
  $image .= '.' . $ext;//アップロードされたファイルの拡張子を取得
  //拡張子判定
  if(preg_match("/\.(png|jpg)$/",$image)){
    $file = "../images/product/$image";
    if (!empty($_FILES['image']['name'])) {//ファイルが選択されていれば$imageにファイル名を代入
      move_uploaded_file($_FILES['image']['tmp_name'], '../images/product/' . $image);//imagesディレクトリにファイル保存
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
    //現在時刻取得

    $date = date("Y-m-d H:i:s");

    echo $_POST['categories_id'],"<br>";
    echo $_SESSION['USER_ID'],"<br>";
    echo $_POST['name'],"<br>";
    echo $_POST['price'],"<br>";
    echo $date,"<br>";
    echo $_POST['form'],"<br>";
    echo $image,"<br>";

    try {
      $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8','root');
      $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
      $sql = "INSERT INTO products(categories_id,members_id,name,price,list_at,form,image,information) VALUES (:categories_id,:members_id,:name,:price,:list_at,:form,:image,:information)";
      $statement = $dbh->prepare($sql);
      $statement->bindValue(':categories_id',$_POST['categories_id']);
      $statement->bindValue(':members_id',$_SESSION["USER_ID"]);
      $statement->bindValue(':name',$_POST['name']);
      $statement->bindValue(':price',$_POST['price']);
      $statement->bindValue(':list_at',$date);
      $statement->bindValue(':form',$_POST['form']);
      $statement->bindValue(':image',$image);
      $statement->bindValue(':information',$_POST['information']);
      $flag = $statement->execute();

      // var_dump($dbh->errorCode());
      // var_dump($dbh->errorInfo());
    } catch (\Exception $e) {
      echo $e->getMessage() . PHP_EOL;
    }
    if($flag){
      print("出品成功！");
      header('Location:../product/top.php');
      exit;
    }else{
      print("出品失敗！");
    }
  }
?>
<?php require('../common/header.php'); ?>
<div class="container">
    <form class="shuppin_form" action="shuppin.php" method="post" enctype="multipart/form-data">
    <div class="shuppin_title shuppin_line"><p class="shuppin_left">商品名:</p><input type="text" name="name" placeholder="例：RPG系ゲーム効果音"></div>
    <div class="shuppin_category shuppin_line"><p class="shuppin_left">カテゴリ:</p>
      <select name="categories_id">
      <option value="1">HAL</option>
      <option value="2">MODE</option>
      <option value="3">IKOU</option>
      </select>
    </div>

    <div class="shuppin_price shuppin_line"><p class="shuppin_left">価格:</p><input type="number" name="price" value="price" placeholder="例:1920円"></div>
    <div class="shuppin_plan shuppin_line"><p class="shuppin_left">商品形式:</p>データ<input type="radio" name="form" value="1">実物<input type="radio" name="form" value="2"></div>
    <div class="shuppin_image shuppin_line"><p class="shuppin_left">商品画像:</p><input id="shuppin_image_button" type="file" name="image" value="image"></div>
    <div class="shuppin_comment shuppin_line">
    <p class="shuppin_left">商品情報</p><textarea name="information"></textarea>
    </div>
    <div class="shuppin_line">
    <div class="shuppin_left"></div>
    <input class="shuppin_submit" type="submit" name="submit" value="登録">
    </div>
  </form>

  </div><!--container-->
  </body>
</html>
