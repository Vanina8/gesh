<?php @session_start();
echo ' lo que tienen las variables de sesion son:';
var_dump($_SESSION);
 session_destroy();
// header("location:../index.php");
?>