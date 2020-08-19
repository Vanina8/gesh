<?php 
include '../conexion.php';

$temporal = array();
$resultado = array();



$sel = $con->query("SELECT ga.id as id, ga.id_grupo as id_grupo, ga.id_asig as id_asig, IFNULL(g.nombre, 'NULO') as nombre_grupo, a.nombre as nombre_asig, a.codigo as codigo_asig, ga.estado as estado FROM grupo_asig ga LEFT JOIN grupo g ON ga.id_grupo=g.id  LEFT JOIN asignatura a ON ga.id_asig=a.id ORDER BY nombre_grupo ASC");

// var_dump('su tipo es: '.gettype($sel));

while ($f = $sel->fetch_assoc()) {
    $temporal = $f;
    array_push($resultado, $temporal);
}

echo json_encode($resultado);

$sel->close();
$con->close();

?>