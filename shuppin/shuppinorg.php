<?php
session_start();

$dsn = "mysql:host=localhost; dbname=cocno; charset=utf8";
$username = "root";
$password = "";
  if (isset($_POST["submit"])) {
    $image = time().uniqid();//ファイル名をユニーク化
    $ext = substr(strrchr($_FILES['image']['name'], '.'), 1);
    $image .= '.' . $ext;//アップロードされたファイルの拡張子を取得

    //拡張子判定
  if(preg_match("/\.(png|jpg)$/",$image)){
    $file = "../images/" . $image;
    if (!empty($_FILES['image']['name'])) {//ファイルが選択されていれば$imageにファイル名を代入
      move_uploaded_file($_FILES['image']['tmp_name'], $file);//imagesディレクトリにファイル保存
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
    try {
      $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
      $sql = "SELECT MAX(id) FROM products";
      $statement = $dbh->prepare($sql);
      $statement->execute();
      $getid = $statement->fetch(PDO::FETCH_COLUMN);
      $getid += 1;
      echo $getid;

      $sql = "INSERT INTO products(id,categories_id,members_id,name,price,list_at,form,image) VALUES (:id,:categories_id,:members_id,:name,:price,:list_at,:form,:image)";
      $statement = $dbh->prepare($sql);
      $statement->bindValue(':id',$getid);
      $statement->bindValue(':categories_id',$_POST['categories_id']);
      $statement->bindValue(':members_id',$_SESSION["USER_ID"]);
      $statement->bindValue(':name',$_POST['name']);
      $statement->bindValue(':price',$_POST['price']);
      $statement->bindValue(':list_at',$date);
      $statement->bindValue(':form',$_POST['form']);
      $statement->bindValue(':image',$image);
      $flag = $statement->execute();
      $row = $statement->fetch(PDO::FETCH_ASSOC);
      var_dump($flag);
      var_dump($row);
    } catch (\Exception $e) {
      echo $e->getMessage() . PHP_EOL;
    }
    if($flag){
      print("インサート成功");
    }else{
      print("インサート失敗");
    }
  }
?>
<!DOCTYPE html>
<html lang="ja" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form action="shuppin.php" method="post" enctype="multipart/form-data">
    <!-- ID <input type="text" name="id"> -->
    商品名<input type="text" name="name"><br>
    カテゴリ<select name="categories_id">
      <option value="1">HAL</option><br>
      <option value="2">MODE</option><br>
      <option value="3">IKOU</option><br>
    </select><br>
    価格<input type="number" name="price" value="price"><br>
    商品形式<br>
    データ<input type="radio" name="form" value="1"><br>
    実物<input type="radio" name="form" value="2"><br>
    商品画像
    <input type="file" name="image" value="image"><br>
    
    <input type="submit" name="submit" value="確認画面へ">（←試運転なので直接インサートする）
  </form>

  </body>
</html>
