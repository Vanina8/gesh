<?php
 
require_once("../conexion.php");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
  

    $nombre= $con->real_escape_string(htmlentities($_POST['nombre']));
    
    
    $ins = $con -> query("INSERT INTO rol (nombre) values ('$nombre')");

    if ($ins) {
        echo "success";
    } else {
        echo "fail";
    }

}else{
    echo "fail";
}

?>