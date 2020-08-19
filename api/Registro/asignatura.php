
<?php
 
require_once("../conexion.php");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
 

    $codigo= mysqli_real_escape_string($con, $_POST['cod_asignatura']);
    $nombre= mysqli_real_escape_string($con, $_POST['nombre']);
    $codigot= $_POST['cod_titulo'];
    
    $estado= (isset($_POST['estado'])) ? 1 : 0 ;
    $id='';
   

    $ins2 = $con -> prepare("INSERT INTO asignatura VALUES(?,?,?,?)");
    $ins2->bind_param("issi",$id,$codigo,$nombre,$estado);
    $res2=$ins2->execute();

    $ins1 = $con -> prepare("INSERT INTO curricula VALUES(?,?,?)"); 
    $ins1->bind_param("iis",$id,$codigot,$codigo);  
    $res1=$ins1->execute();

    if ($res1 && $res2) {
        echo "success";
    } else {
        echo "fail";
    }

    $ins1->close();
    $ins2->close();

}else{
    echo "fail";
}

$con->close();


?>

