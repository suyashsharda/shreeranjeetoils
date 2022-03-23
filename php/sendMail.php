<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) && isset($_POST['tel'])) {
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $message = $_POST['message'] . "<br>from : " . $email;

    require_once "../PHPMailer/vendor/autoload.php";

    $mail = new PHPMailer();

    //SMTP settings
    $mail->SMTPDebug = 0; 
    $mail->isSMTP();
    $mail->Host = "smtp.hostinger.com";
    $mail->SMTPAuth = true;
    $mail->Username = "support@shreeranjeetoils.com";
    $mail->Password = "Qwerty@123";
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;

    $mail->From = "support@shreeranjeetoils.com";
    $mail->FromName = $name;

    $mail->addAddress("support@shreeranjeetoils.com");

    //email settings
    $mail->isHTML(true);
    
    $mail->Subject = ("mail subject");
    $mail->telephone= ("telephone");
    $mail->Body = $message;

    try {
        $mail->send();
        //echo "Message has been sent successfully";
        $status= "success";
    } catch (Exception $e) {
        //echo "Mailer Error: " . $mail->ErrorInfo;
        $status= "fail";
    }
    exit(json_encode(array("status" => $status)));

}