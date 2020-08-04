<?php
 
require_once("../conexion.php");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
  

    $nombre= $con->real_escape_string(htmlentities($_POST['nombre']));

    
//   $consulta="INSERT INTO profesor ( nombres, apellidos, dni, email, clave, estado, id_rol, telefono) values ('$nombre', '$apellido', '$dni', '$email', '$passEncriptada', 1, 4, '$telefono')"; 
//   echo 'la consulta fue'.$consulta;

    $ins = $con -> query("INSERT INTO categoriaaula (nombre) values ('$nombre')");

    if ($ins) {
        echo "success";
    } else {
        echo "fail";
    }

}else{
    echo "fail";
}

?>