<?php



if (isset($_POST['enviar'])) {
    if (!empty($_POST['Nombre']) && !empty($_POST['Mensaje']) && !empty($_POST['Email'])) 
    {
        
        $name=$_POST['Nombre'];
        $telefono =$_POST['Telefono'];
        $message=$_POST['Mensaje'];
        $email =$_POST['Email'];
        $enviar=$_POST['enviar'];

        // header 
        $header= "From" . $email ."\r\n";

        $mail= mail( 'crozzbite@gmail.com' , $header , $name , $telefono , $message , $email  );

        if($mail){
            echo"<h4>!mail enviado exitosamente!</h4>";
        }
    }
}



?>
// no es el mas reciente pero sirve