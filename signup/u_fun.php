<?php

// if( !isset($_POST['id']) || $_POST['id'] === '' ){
//     header('Location: user.php');
//     exit;
// }
define('M1','未入力です。');
define('M2','学籍番号を入力してください');
define('M3','半角英数で入力してください');
define('M4','特殊記号,半角英数字,8桁以上');
define('M5','一致しません');
define('M6','メールアドレスの形式が違います');
define('M7','登録されているIDです');
define('M8','登録されているメールアドレスです');
define('M9','電話番号を入力してください');
define('M10','郵便番号を入力してください');


function Vinput($data,$key){
    if(empty($data)){
        $_SESSION['error'][$key] = M1;
    }
}


function Vid($data,$key,$limit = 5){
    if(preg_match("/^[0-9]+$/", $data)){
        if(strlen($data) !== $limit){
        $_SESSION['error'][$key] = M2;
        }
        }else{
        $_SESSION['error'][$key] = M3;
    }
}

function Vpass($data,$key){
    $patterns = '/\A(?=.*?[a-z])(?=.*?\d)(?=.*?[!-\/:-@[-`{-~])[!-~]{8,100}+\z/i';
    
    if(!preg_match($patterns,$data)){
        $_SESSION['error'][$key] = M4;

    }
}

function Vmatch($data,$key,$data2){
    if($data !== $data2){
        $_SESSION['error'][$key] = M5;

    }
}

function Vmail($data, $key){
    if(!preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/", $data)){
        $_SESSION['error'][$key] = M6;

    }
}

function VdupId($data,$key){

    try {
        // DBへ接続
        $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
        $sql = "SELECT id FROM members WHERE id = :id";
        $statement = $dbh->prepare($sql);
        $statement->bindParam(':id',$data);
        $statement->execute();
        $value =$statement->fetch(PDO::FETCH_COLUMN);
        if($data == $value){
            $_SESSION['error'][$key] = M7;
        }
    } catch(PDOException $e) {
        echo $e->getMessage();
        die();
    }

    }

function Vdupmail($data,$key){

    try {
        // DBへ接続
        $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
        $sql = "SELECT mail FROM members WHERE mail = :mail";
        $statement = $dbh->prepare($sql);
        $statement->bindParam(':mail',$data);
        $statement->execute();
        $value =$statement->fetch(PDO::FETCH_COLUMN);
        if($data == $value){
            $_SESSION['error'][$key] = M8;
        }
    } catch(PDOException $e) {
        echo $e->getMessage();
        die();
    }
    
    }


function Cschool($data){
    switch($data){
        case "HAL":
            $data = 1;
        break;
        case "MODE":
            $data = 2;
        break;
        case "IKOU":
            $data = 3;
        break;
        default:
    }
    return $data;
}

function Cfaculty($data){
    switch($data){
        case "IT":
            $data = 11;
        break;
        case "CG":
            $data = 12;
        break;
        case "ゲーム":
            $data = 13;
        break;
        case "ミュージック":
            $data = 14;
        break;
        case "カーデザイン":
            $data = 15;
        break;
        case "ファッション":
            $data = 21;
        break;
        case "ファッションビジネス":
            $data = 22;
        break;
        case "インテリア":
            $data = 23;
        break;
        case "グラフィック":
            $data = 24;
        break;
        case "メイク・ネイル":
            $data = 25;
        break;
        case "ヘアメイク":
            $data = 26;
        break;
        case "救急・臨床":
            $data = 31;
        break;
        case "看護":
            $data = 32;
        break;
        case "歯科医療":
            $data = 33;
        break;
        case "リハビリテーション":
            $data = 33;
        break;
        case "スポーツ":
            $data = 34;
        break;
        case "東洋医療":
            $data = 35;
        break;
        case "福祉":
            $data = 36;
        break;
     
        default:
    }
    return $data;
}

function Csubject($data){
    switch($data){
        case "高度情報処理":
            $data = 111;
        break;
        case "WEB":
            $data = 112;
        break;
        case "CG映像":
            $data = 121;
        break;
        case "グラフィックデザイン":
            $data = 122;
        break;
        case "アニメ・イラスト":
            $data = 123;
        break;
        case "ゲームデザイン":
            $data = 131;
        break;
        case "ゲーム企画":
            $data = 132;
        break;
        case "ゲーム制作":
            $data = 133;
        break;
        case "ミュージック":
            $data = 141;
        break;
        case "カーデザイン":
            $data = 151;
        break;
        case "ファッション高度専門士":
            $data = 211;
        break;
        case "ファッションビジネス・テクノロジー":
            $data = 212;
        break;
        case "ファッションビジネス":
            $data = 221;
        break;
        case "インテリア":
            $data = 231;
        break;
        case "グラフィック":
            $data = 241;
        break;
        case "メイクアップ・ネイル":
            $data = 251;
        break;
        case "ヘアメイク・アーティスト":
            $data = 261;
        break;
        case "美容":
            $data = 262;
        break;
        case "美容・通信":
            $data = 263;
        break;
        case "臨床工学":
            $data = 311;
        break;
        case "救急救命":
            $data = 312;
        break;
        case "臨床工学技士":
            $data = 313;
        break;
        case "高度専門士看護":
            $data = 321;
        break;
        case "高度看護保健":
            $data = 322;
        break;
        case "実践看護":
            $data = 323;
        break;
        case "助産師":
            $data = 324;
        break;
        case "歯科衛生":
            $data = 331;
        break;
        case "理学療法":
            $data = 341;
        break;
        case "作業療法":
            $data = 342;
        break;
        case "言語聴覚":
            $data = 343;
        break;
        case "アスレティックトレーナー":
            $data = 351;
        break;
        case "スポーツトレーナー":
            $data = 352;
        break;
        case "鍼灸":
            $data = 361;
        break;
        case "柔道整復":
            $data = 362;
        break;
        case "介護福祉":
            $data = 371;
        break;
        case "精神保健福祉士":
            $data = 372;
        break;
        case "社会福祉士":
            $data = 373;
        break;
    }
    return $data;
}

function Vtel($data,$key) {
    if (!preg_match("/^[0-9]{6,13}$/", $data)) {
        $_SESSION['error'][$key] = M9;
    }
}

function Vpos($data,$key) {
    if (!preg_match("/^[0-9]{3,4}$/", $data)) {
        $_SESSION['error'][$key] = M10;
    }
}

function Rid($length = 8){
    return "CO".base_convert(mt_rand(pow(36, $length - 1), pow(36, $length) - 1), 10, 36);
}


function RdupId($data){
    try {
     // DBへ接続
     $dbh = new PDO('mysql:host=127.0.0.1; dbname=cocno; charset=utf8', 'root');
 
     $sql = "SELECT id FROM members WHERE id = :Rid";
     $statment = $dbh->prepare($sql);
     $statment->bindParam(':Rid',$data);
     $statment->execute();
     $flag = $statment->fetch(PDO::FETCH_COLUMN);
 
         if($flag){
             while($data == $flag){
                 $data = Rid();
             }
         }

        return $data;
 
     } catch(PDOException $e) {
         echo $e->getMessage();
         die();
     }
 }

?>