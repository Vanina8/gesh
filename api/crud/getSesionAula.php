<?php 
include '../conexion.php';

$temporal = array();
$resultado = array();


$sel = $con->query("SELECT sa.id as id, sa.id_sesion as id_sesion, sa.id_aula as id_aula, IFNULL(a.nombre, 'NULO') as nombre_aula, a.estado as aula_estado, s.id_tramo as id_tramo, s.dia as dia FROM sesion_aula sa LEFT JOIN aula a ON sa.id_aula=a.id  LEFT JOIN sesion s ON sa.id_sesion=s.id ORDER BY a.nombre ASC");


while ($f = $sel->fetch_assoc()) {
    $temporal = $f;
    array_push($resultado, $temporal);
}


echo json_encode($resultado);



$sel->close();
$con->close();

?>