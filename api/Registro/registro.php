<?php
 
require_once("../conexion.php");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    
       
    $nombre= mysqli_real_escape_string($con, $_POST['nombre']);
    $apellido= mysqli_real_escape_string($con, $_POST['apellido']);
    $email= mysqli_real_escape_string($con, htmlentities($_POST['email']));
    $pass= mysqli_real_escape_string($con, htmlentities($_POST['pass']));
    $dni= mysqli_real_escape_string($con, htmlentities($_POST['dni']));
    $telefono= mysqli_real_escape_string($con, htmlentities($_POST['telefono']));
    $rol= $_POST['rol'];
    $estado= array_key_exists('estado', $_POST) ? 1 : 0 ;

    $passEncriptada= password_hash($pass, PASSWORD_BCRYPT);
    $id='';


    $ins = $con -> prepare("INSERT INTO profesor VALUES (?,?,?,?,?,?,?,?,?)");
    $ins->bind_param("isssssiis",$id,$nombre, $apellido, $dni, $email, $passEncriptada, $estado, $rol, $telefono);


    if ($ins->execute()) {
        echo "success";
    } else {
        echo "fail";
    }
    $ins->close();
    
}else{
    header("location:../../index.php");
}

$con->close();
?>