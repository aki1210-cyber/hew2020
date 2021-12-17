<?php

define('MSG01','未入力');
define('MSG02', 'Emailの形式で入力してください');
define('MSG03','半角英数字のみご利用いただけます');
define('MSG04','学籍番号を入力してください');
define('MSG05','半角数字を入力してください');
define('MSG06','特殊記号含む半角英数字を含んだ8桁以上のパスワードを入力してください');
define('MSG07','入力内容が一致しません');

$err_msg = array();

function requireCheck($str,$key){
    if(empty($str)){
        global $err_msg;
        $err_msg[$key] = MSG01;
    }
    return htmlspecialchars($str);
}


function validEmail($str, $key){
    if(!preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/", $str)){
        global $err_msg;
        $err_msg[$key] = MSG02;
    }
}

function validHalf($str, $key){
    if(!preg_match("/^[a-zA-Z0-9]+$/", $str)){
        global $err_msg;
        $err_msg[$key] = MSG03;
    }
}

function matchid($str,$key,$limit = 5){
    global $err_msg;
    if(preg_match("/^[0-9]+$/", $str)){
        if(strlen($str) !== $limit){
            $err_msg[$key] = MSG04;
        }
        }else{
            $err_msg[$key] = MSG05;
    }
    return $str;
}

function validpassword($str,$key){
    $patterns = '/\A(?=.*?[a-z])(?=.*?\d)(?=.*?[!-\/:-@[-`{-~])[!-~]{8,100}+\z/i';
    
    if(!preg_match($patterns,$str)){
        global $err_msg;
        $err_msg[$key] = MSG06;
    }
}

function Matchpassword($str,$key,$str2){
    if($str !== $str2){
        global $err_msg;
        $err_msg[$key] = MSG07;
    }
}


?>