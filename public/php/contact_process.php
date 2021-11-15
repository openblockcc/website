<?php

include dirname(dirname(__FILE__)) . '/mail.php';

error_reporting(E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if ($post) {
    include 'email_validation.php';

    $name = stripslashes($_POST['name']);
    $contact = trim($_POST['contact']);
    $subject = stripslashes($_POST['subject']);
    $message = stripslashes($_POST['message']);


    $error = '';

    if (!$name) {
        $error .= 'Please enter your name.<br />';
    }
    if (!$contact) {
        $error .= 'Please enter an e-mail address.<br />';
    }
    if (!$message || strlen($message) < 10) {
        $error .= "Please enter your message. It should have at least 10 characters.<br />";
    }

    if (!$error) {
        $mail = mail(
            CONTACT_FORM,
            $subject,
            $message,
            "From: " . $name . "  Contact information: ". $contact . "\r\n"
                . "X-Mailer: PHP/" . phpversion()
        );


        if ($mail) {
            echo 'OK';
        }
    } else {
        echo '<div class="notification_error">' . $error . '</div>';
    }
}
