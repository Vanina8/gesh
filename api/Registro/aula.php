<?php
 
require_once("../conexion.php");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
  

    $nombre= $con->real_escape_string(htmlentities($_POST['nombre']));
    $estado= $con->real_escape_string(htmlentities($_POST['estado']));
    $idcategoria= $con->real_escape_string(htmlentities($_POST['id_cate']));

    $ins = $con -> query("INSERT INTO aula ( nombre, estado, id_categoria) values ('$nombre', '$estado', '$idcategoria')");

    if ($ins) {
        echo "success";
    } else {
        echo "fail";
    }

}else{
    echo "fail";
}

?>