<?php

/* https://api.telegram.org/bot1127681841:AAECvp_8c8NWPvVB12ZlQ3SFU4Xu4IzfdXQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$comment = $_POST['comment'];
$email = $_POST['user_email'];
$txt = "";
$token = "1127681841:AAECvp_8c8NWPvVB12ZlQ3SFU4Xu4IzfdXQ";
$chat_id = "-426263083";
$arr = array(
  'Имя пользователя: ' => $name,
  'Email' => $email,
  'Текст' => $comment
  
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>