<?php 
include '../conexion.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {
$email = $con ->real_escape_string(htmlentities($_POST['email']));
$pass = $con ->real_escape_string(htmlentities($_POST['pass']));

$sel = $con->query("SELECT p.nombres as nombres, p.email as email, p.clave as clave, r.nombre as rol  FROM profesor p LEFT JOIN rol r on p.id_rol= r.id  WHERE p.email = '$email' ");

if ($f = $sel->fetch_assoc()) {
   $correo = $f['email'];
   $password = $f['clave'];
   $user = $f['nombres'];
   $rol= $f['rol'];
}

$passEncriptada = password_verify($pass,$password);

if ($email == $correo && $passEncriptada == true) {
    $_SESSION['user'] = $user;
    $_SESSION['rol'] = $rol;

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