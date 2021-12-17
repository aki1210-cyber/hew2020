<?php
  $dsn = "mysql:dbname=cocno;host=localhost;charset=utf8mb4";
  $username = "root";
  $password = "";
  $driver_options = [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_EMULATE_PREPARES => false,
  ];

  if(isset($_POST["comm_renew"])){
    session_start();
    $comm = $_POST["comment"];
    // $image = $_FILES['image']['name'];
    $image = uniqid();//ファイル名をユニーク化
    $ext = substr(strrchr($_FILES['image']['name'], '.'), 1);
    $image .= '.' . $ext;//アップロードされたファイルの拡張子を取得
    if(preg_match("/\.(png|jpg)$/",$image)){
      $file = "../images/$image";
      if (!empty($_FILES['image']['name'])) {//ファイルが選択されていれば$imageにファイル名を代入
        move_uploaded_file($_FILES['image']['tmp_name'], '../images/' . $image);//imagesディレクトリにファイル保存
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
            var_dump($file);
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
      $pdo = new PDO($dsn, $username, $password);
      $stmt = $pdo->prepare('update students set comment = :comm, image = :image where id = :id');
      $stmt->bindValue(':comm',$comm);
      $stmt->bindValue(':image',$image);
      $stmt->bindValue(':id',$_SESSION['USER_ID']);
//      $stmt->execute([$comm,$image,$_SESSION['USER_ID']]);
      $stmt->execute();
      print("コメント変更完了");
    } catch (\Exception $e) {
      echo $e->getMessage() . PHP_EOL;
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
    <form action="comm_renew.php" method="post" enctype="multipart/form-data">
      画像更新：<input type="file" name="image"><br>
      コメント更新：<input type="text" name="comment">
      <button><input type="submit" name="comm_renew" value="更新"></button>
    </form>
  </body>
</html>
