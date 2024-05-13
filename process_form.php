<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $phone = $_POST["phone"];

     $to = "z-minasyan@list.ru";
    
     $subject = "Новое сообщение от $name";
    
     $body = "От: $name\nEmail: $email\nТелефон: $phone\nСообщение:\n$message";
    
     if (mail($to, $subject, $body)) {
        echo '<script type="text/javascript">
                alert("Ваше сообщение успешно отправлено!");
                window.location.href = "index.html";
              </script>';
       
    } else {
        echo 'Ваше сообщение не отправлено, попробуйте еще раз!';
    }
}
?>
