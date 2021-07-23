<?php
// importando la libreria de mail PEAR
require_once 'Mail.php';

$recipients = 'joe@example.com';

$headers['From']    = 'richard@example.com';
$headers['To']      = 'joe@example.com';
$headers['Subject'] = 'Test message';

$body = 'Test message';

$params['sendmail_path'] = '/usr/lib/sendmail';

// Create the mail object using the Mail::factory method
$mail_object =& Mail::factory('sendmail', $params);

$mail_object->send($recipients, $headers, $body);

// if (isset($_POST['enviar'])) {
//     if (!empty($_POST['Nombre']) && !empty($_POST['Mensaje']) && !empty($_POST['Email'])) 
//     {
        
//         $name=$_POST['Nombre'];
//         $telefono =$_POST['Telefono'];
//         $message=$_POST['Mensaje'];
//         $email =$_POST['Email'];
//         $enviar=$_POST['enviar'];

//         // header 
//         $header= "From" . $email ."\r\n";

//         $mail= mail( 'crozzbite@gmail.com' , $header , $name , $telefono , $message , $email  );

//         if($mail){
//             echo"<h4>!mail enviado exitosamente!</h4>";
//         }
//     }
// }



?>
// no es el mas reciente pero sirve