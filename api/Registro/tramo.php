<?php
 
require_once("../conexion.php");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
  

    $inicio=$_POST['inicio'];
    $fin= $_POST['fin'];

   


    $ins = $con -> query("INSERT INTO tramos ( inicio, fin) values ('$inicio', '$fin')");

    if ($ins) {
        echo "success";
    } else {
        echo "fail";
    }

}else{
    echo "fail";
}

?>