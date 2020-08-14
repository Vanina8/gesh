<?php 
include '../conexion.php';

$temporal = array();
$resultado = array();

$idGrupo = htmlentities($_GET['id_grupo']);
$idHorario =htmlentities($_GET['id_horario']);


     $sel2 = $con->query("SELECT p.id as p_id, p.nombres as p_nombre, p.apellidos as p_apellido, s.id as s_id, s.nombre as s_nombre, a.id as a_id, a.nombre as a_nombre, g.id AS g_id, g.nombre as g_nombre, t.id as t_id, t.inicio as inicio, t.fin as fin, e.dia, e.id_horario, e.id FROM sesion e LEFT JOIN tramos t ON e.id_tramo=t.id LEFT JOIN profesor p ON e.id_profe=p.id LEFT JOIN asignatura s ON e.id_asig=s.id LEFT JOIN aula a ON e.id_aula=a.id LEFT JOIN grupo g ON e.id_grupo=g.id WHERE g.id='$idGrupo' AND e.id_horario='$idHorario'");

           

                    while ($f = $sel2->fetch_assoc()) {
                         $temporal = $f;
                         array_push($resultado, $temporal);
                     }
                     echo json_encode($resultado);
         
                  
                     $sel2->close();
                     $con->close();




?>