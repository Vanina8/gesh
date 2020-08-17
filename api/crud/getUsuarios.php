<?php 
include '../conexion.php';

$temporal = array();
$resultado = array();

$sel = $con->query("SELECT p.id as p_id, p.nombres as p_nombre, p.apellidos as p_apellido, p.dni as p_dni, p.email as p_email, p.clave as p_clave, p.estado as p_estado, p.id_rol as p_idrol, p.telefono as p_telefono, r.id as r_id, r.nombre as r_nombre FROM profesor p LEFT JOIN rol r ON p.id_rol=r.id   ORDER BY p.apellidos DESC");

while ($f = $sel->fetch_assoc()) {
    $temporal = $f;
    array_push($resultado, $temporal);
}

echo json_encode($resultado);

$sel->close();
$con->close();

?>