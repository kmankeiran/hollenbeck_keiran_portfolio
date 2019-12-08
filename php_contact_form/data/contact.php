<?php

if(empty($_POST)){
    echo 'Something went wrong!';
    exit;
}

$name = '';
$email = '';
$subject = '';
$message = '';
$recipient = 'kmankeiran@gmail.com';



if(isset($_POST['name'])){
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['email'])){
    $email = str_replace(array("\r","\n","%0a","%0d"), '',$_POST['email']);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
}

if(isset($_POST['subject'])){
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['message'])){
    $message = $_POST['message'];
}

$headers = [
'From' =>'noreply@test.ca' ,
'Reply-To' =>$name.'<'.$email.'>'

];

if(mail($recipient,$subject,$message,$headers)){
    echo '<p>Thanks for the message!' .$name.' I will get back to you as soon as I can</p>';
}else{
    echo '<p>Oh no, it did not go through!</p>';

}


?>