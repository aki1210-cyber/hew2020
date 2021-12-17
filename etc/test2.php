<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
 
</head>
<body>
    <?php
    // var_dump($_FILES['aaa']['type']);
    ?>

    <?php phpinfo(); ?>

    <?php
    $tempfile = $_FILES['aaa']['tmp_name'];
    $filename = 'upfile/' . $_FILES['aaa']['name'];


    echo $filename;
    list($width,$height) = getimagesize($tempfile);
    echo $width,"<br>";
    $resizefile = getimagesize($tempfile);
    var_dump($resizefile);

    if(is_uploaded_file($tempfile)){
        if(move_uploaded_file($tempfile,$filename)){
            echo $filename . "をアップロードしました。";
        }else{
            echo "not";
        }
    }else{
        echo "huka";
    }
    ?>
</body>
</html>