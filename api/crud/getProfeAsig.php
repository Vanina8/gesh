<?php 
include '../conexion.php';

$temporal = array();
$resultado = array();

 $sel = $con->query("SELECT pa.id as id, pa.id_profe as id_profe, pa.id_asig as id_asig, p.nombres as nombre_profe, p.apellidos as apellido_profe, a.nombre as nombre_asig, a.codigo as codigo_asig FROM profe_asig pa LEFT JOIN profesor p ON pa.id_profe=p.id  LEFT JOIN asignatura a ON pa.id_asig=a.id ORDER BY nombre_profe ASC");


while ($f = $sel->fetch_assoc()) {
    $temporal = $f;
    array_push($resultado, $temporal);
}

echo json_encode($resultado);

$sel->close();
$con->close();

?>