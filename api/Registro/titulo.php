<?php
 
require_once("../conexion.php");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
  

    $nombre= $_POST['nombre'];
    $curso= $_POST['curso'];
    $id='';
    

    $ins1 = $con -> prepare("INSERT INTO titulo VALUES(?,?,?)");
    $ins1->bind_param("iss",$id,$nombre,$curso);

    

    if ($ins1->execute()) {
        echo "success";
    } else {
        echo "fail";
    }

}else{
    echo "fail";
}

?>