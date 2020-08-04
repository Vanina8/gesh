<?php 
include '../conexion.php';

$temporal = array();
$resultado = array();

// $sel = $con->query("SELECT * FROM curricula ");



$sel = $con->query("SELECT a.id as id, a.codigo as codigo, a.nombre as nombre, a.estado as estado, c.id_titulo, c.codigo_asig,  IFNULL(t.nombre, 'NULO') as titulo FROM asignatura a LEFT JOIN curricula c ON c.codigo_asig=a.codigo LEFT JOIN titulo t ON c.id_titulo=t.id ORDER BY nombre DESC");

while ($f = $sel->fetch_assoc()) {
    $temporal = $f;
    array_push($resultado, $temporal);
}


echo json_encode($resultado);

$sel->close();
$con->close();

?>