<?php
$email = $_POST['user_email'];
$message = $_POST['text'];
$txt = "";
$token = "1086631934:AAGa9SHk7ObkIJhjHlzXHPB4zCeFpRGnsFc";
$chat_id = "-426035199"; 
// $token = "1086631934:AAGa9SHk7ObkIJhjHlzXHPB4zCeFpRGnsFc";
// $chat_id = "982850375"; //982850375
//****************EMAL********************\\
$project_name = 'test';
$admin_email  = 'kwotvtanke@rambler.ru';
$form_subject = 'Тест заявка ';
//****************************************\\

$arr = array(
  'Email' => $email,
  'Сообщение' => $message,
);
		
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."\n";
};


if($_FILES['uploadfile']['tmp_name']) {
	
	$postparam = array(
		'chat_id' => $chat_id,
		'caption' => $txt,
		'parse_mode' => 'html',
		'photo' => new CURLFile('images/image.png')
	);
	
	// Путь загрузки
	$path = 'images/';

	// Обработка запроса
	if ($_SERVER['REQUEST_METHOD'] == 'POST')
	{
	 // Загрузка файла и вывод сообщения
	 @copy($_FILES['uploadfile']['tmp_name'], $path . 'image.png');
	}

	$request = curl('https://api.telegram.org/bot'.$token.'/sendphoto', $postparam);
	
	foreach($arr as $key => $value) {
		$message .= "
		<tr style='background-color: #f8f8f8;'>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	};
	$message = "<table style='width: 100%;'>$message</table>";
	 $headers = "MIME-Version: 1.0" . PHP_EOL .
	 "Content-Type: text/html; charset=utf-8" . PHP_EOL .
	 'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
	 'Reply-To: '.$admin_email.'' . PHP_EOL;

	 mail($admin_email, adopt($form_subject), $message, $headers );	
	 
} else { 
	$postparam = array(
		'chat_id' => $chat_id,
		'text' => $txt,
		'parse_mode' => 'html'
	);	
	
	$request = curl('https://api.telegram.org/bot'.$token.'/sendMessage', $postparam);
	foreach($arr as $key => $value) {
		$message .= "
		<tr style='background-color: #f8f8f8;'>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	};
	$message = "<table style='width: 100%;'>$message</table>";
	 $headers = "MIME-Version: 1.0" . PHP_EOL .
	 "Content-Type: text/html; charset=utf-8" . PHP_EOL .
	 'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
	 'Reply-To: '.$admin_email.'' . PHP_EOL;

	 mail($admin_email, adopt($form_subject), $message, $headers );	
	
}
	unlink('images/image.jpg');
	
function curl($url, $postparam = []) {

		
	$ch = curl_init();
	curl_setopt ($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_SAFE_UPLOAD, false);
    curl_setopt($ch, CURLOPT_POST, true);
	// I changed UA here
	curl_setopt ($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.1) Gecko/20061204 Firefox/2.0.0.1');

	curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS,$postparam);
	
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data; charset=UTF-8'));
	curl_setopt ($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 15);
	curl_setopt ($ch, CURLOPT_AUTOREFERER, true);
	curl_setopt ($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt ($ch, CURLOPT_SSL_VERIFYHOST, 2);
	$html = curl_exec($ch);
	var_dump($html);
	// I added this 
	return $html; 
}
 function adopt($text) {
 	return '=?UTF-8?B?'.Base64_encode($text).'?=';
 }


?>