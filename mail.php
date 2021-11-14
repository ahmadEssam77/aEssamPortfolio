<?php
// Get data from form and store it in variables
$name = $_POST['senderName'];
$email = $_POST['senderEmail'];
$subject = $_POST['senderSubject'];
$message = $_POST['senderMessage'];
$to = "ahmad77essam@gmail.com";

$txt = "Name: ".$name ."\r\nEmail: ".$email ."\r\nMessage: ".$message;
$headers = "From: noreply@ae.com";

if ($email != NULL) {
    mail($to, $subject, $txt, $headers);
}

?>