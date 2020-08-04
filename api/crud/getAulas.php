<?php 
include '../conexion.php';

$temporal = array();
$resultado = array();

$sel = $con->query("SELECT a.id as id, a.nombre as nombre, a.estado as estado, c.nombre as categoria FROM aula a LEFT JOIN categoriaaula c ON a.id_categoria = c.id ORDER BY c.nombre ASC");

while ($f = $sel->fetch_assoc()) {
    $temporal = $f;
    array_push($resultado, $temporal);
}

echo json_encode($resultado);

$sel->close();
$con->close();

?>

