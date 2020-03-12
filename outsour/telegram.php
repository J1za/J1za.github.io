<?php
$email = $_POST['user_email'];
$message = $_POST['text'];
$txt = "";


$token =  "997369560:AAFvmIXUMN4qo7-AC3tpiyLHGTdxRr7IycE"; 
$chat_id = "-499594172"; 

// Путь загрузки
$path = 'file/';
 

//****************EMAL********************\\
$project_name = 'Microtasky';
$admin_email  = 'microtasky@gmail.com';
$form_subject = 'Заявка';
//****************************************\\

$arr = array(
  'Email' => $email,
  'Сообщение' => $message,
);
		
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."\n";
};

var_dump($_FILES['uploadfile']['name']);
if($_FILES['uploadfile']['tmp_name']) {
	
	$postparam = array(
		'chat_id' => $chat_id,
		'caption' => $txt,
		'parse_mode' => 'html',
		'document' => new CURLFile('file/'.$_FILES['uploadfile']['name'])
	);
	
	// Обработка запроса
	if ($_SERVER['REQUEST_METHOD'] == 'POST')
	{
	 // Загрузка файла и вывод сообщения
	 @copy($_FILES['uploadfile']['tmp_name'], $path . $_FILES['uploadfile']['name']);
	}

	$request = curl('https://api.telegram.org/bot'.$token.'/sendDocument', $postparam);
	
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
	unlink($path . $_FILES['uploadfile']['name']);
	
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