
<?php
 
require_once("../conexion.php");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    
    $codigo= $_POST['cod_asignatura'];
    $nombre= $_POST['nombre'];
    $estado= $_POST['estado'];
    $codigot= $_POST['cod_titulo'];
    $id='';

    $ins1 = $con -> prepare("INSERT INTO curricula VALUES(?,?,?)"); 
    $ins1->bind_param("iis",$id,$codigot,$codigo);

    $ins2 = $con -> prepare("INSERT INTO asignatura VALUES(?,?,?,?)");
    $ins2->bind_param("issi",$id,$codigo,$nombre,$estado);

    
    $res1=$ins1->execute();
    $res2=$ins2->execute();

    if ($res1 && $res2) {
        echo "success";
    } else {
        echo "fail";
    }

}else{
    echo "fail";
}
$ins1->close();
$ins2->close();
$con->close();


?>

