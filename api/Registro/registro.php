<?php
 
require_once("../conexion.php");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
  
    
    $nombre= $con->real_escape_string(htmlentities($_POST['nombre']));
    $apellido= $con->real_escape_string(htmlentities($_POST['apellido']));
    $email= $con->real_escape_string(htmlentities($_POST['email']));
    $pass= $con->real_escape_string(htmlentities($_POST['pass']));
    $dni= $con->real_escape_string(htmlentities($_POST['dni']));
    $telefono= $con->real_escape_string(htmlentities($_POST['telefono']));
    $estado= $con->real_escape_string(htmlentities($_POST['estado']));
    $rol= $con->real_escape_string(htmlentities($_POST['rol']));

    $passEncriptada= password_hash($pass, PASSWORD_BCRYPT);

    $id='';

    $ins = $con -> prepare("INSERT INTO profesor VALUES (?,?,?,?,?,?,?,?,?)");
    $ins->bind_param("isssssiis",$id,$nombre, $apellido, $dni, $email, $passEncriptada, $estado, $rol, $telefono);


    // $ins = $con -> prepare("INSERT INTO profesor ( nombres, apellidos, dni, email, clave, estado, id_rol, telefono) values ('$nombre', '$apellido', '$dni', '$email', '$passEncriptada', '$estado', '$rol', '$telefono')");

    // $ins2 = $con -> prepare("INSERT INTO asignatura VALUES(?,?,?,?)");
    // $ins2->bind_param("issi",$id,$codigo,$nombre,$estado);

    
    // $res1=$ins1->execute();



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