<?php 
include '../conexion.php';

$temporal = array();
$resultado = array();


$curso = substr(htmlentities($_GET['curso']), 0,4);
$semestre = htmlentities($_GET['semestre']);

//  echo "esto es lo que llega en getSesionesCurso:".$idgrupo."  ".$curso." ".$semestre;

$consulta="SELECT * FROM horario WHERE curso='$curso' AND semestre='$semestre'";

// echo ' la consulta es: '.$consulta;

$sel = $con->query($consulta);

if($sel){

     //  var_dump($sel);

     if($sel->num_rows>0){

          $horario = $sel->fetch_assoc();
          $idhorario=$horario['id'];

               //   echo "<br>consiguio la primera consulta el id de horario es: ".$idhorario;

            $sel = $con->query("SELECT p.id as p_id, p.nombres as p_nombre, p.apellidos as p_apellido, s.id as s_id, s.nombre as s_nombre, a.id as a_id, a.nombre as a_nombre, g.id AS g_id, g.nombre as g_nombre, t.id as t_id, t.inicio as inicio, t.fin as fin, dia FROM `sesion` e LEFT JOIN tramos t ON e.id_tramo=t.id LEFT JOIN profesor p ON e.id_profe=p.id LEFT JOIN asignatura s ON e.id_asig=s.id LEFT JOIN aula a ON e.id_aula=a.id LEFT JOIN grupo g ON e.id_grupo=g.id WHERE e.id_horario='$idhorario'" );

            while ($f = $sel->fetch_assoc()) {
                $temporal = $f;
                array_push($resultado, $temporal);
            }

            echo json_encode($resultado);

            $sel->close();
            $con->close();
    }
}
?>