<?php 
include '../conexion.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {
$email = $con ->real_escape_string(htmlentities($_POST['email']));
$pass = $con ->real_escape_string(htmlentities($_POST['pass']));

$sel = $con->query("SELECT nombres, email, clave FROM profesor WHERE email = '$email' ");

if ($f = $sel->fetch_assoc()) {
   $correo = $f['email'];
   $password = $f['clave'];
   $user = $f['nombres'];
}

$passEncriptada = password_verify($pass,$password);

if ($email == $correo && $passEncriptada == true) {
    $_SESSION['user'] = $user;
    echo "success";
} else {
    echo "fail";
}


$sel->close();
$con->close();
}
else{
    header("location:../../index.php");
}
?>