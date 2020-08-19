
<?php 
include '../conexion.php';
$id = htmlentities($_GET['id']);
$codigo = htmlentities($_GET['codigo']);

$res1 = eliminarDTablaAsig($con, $id);
$res2 = eliminarDTablaGrupAsi($con, $id);
$res3 = eliminarDTablaProAsi($con, $id);
$res4 = eliminarDTablaSesi($con, $id);
$res5 = eliminarDTablaCurr($con, $codigo);

if ($res1 && $res2 && $res3 && $res4) {
    echo "success";
} else {
    echo "fail";
}

$con->close();


function eliminarDTablaAsig($con, $id){

    $del = $con->prepare("DELETE FROM asignatura WHERE id = ? ");
    $del->bind_param("i",$id);
    $respuesta= $del->execute();
    $del->close();
    return $respuesta;
}

function eliminarDTablaGrupAsi($con, $id){

    $del = $con->prepare("DELETE FROM grupo_asig WHERE id_asig = ? ");
    $del->bind_param("i",$id);
    $respuesta= $del->execute();
    $del->close();
    return $respuesta;

}
function eliminarDTablaProAsi($con, $id){

    $del = $con->prepare("DELETE FROM profe_asig WHERE id_asig = ? ");
    $del->bind_param("i",$id);
    $respuesta= $del->execute();
    $del->close();
    return $respuesta;
}
function eliminarDTablaSesi($con, $id){

    $del = $con->prepare("DELETE FROM sesion WHERE id_asig = ? ");
    $del->bind_param("i",$id);
    $respuesta= $del->execute();
    $del->close();
    return $respuesta;
}
function eliminarDTablaCurr($con, $id){

    $del = $con->prepare("DELETE FROM curricula WHERE codigo_asig = ? ");
    $del->bind_param("s",$id);
    $respuesta= $del->execute();
    $del->close();
    return $respuesta;
}


?>