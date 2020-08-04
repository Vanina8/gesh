<?php 
include '../conexion.php';

$temporal = array();
$resultado = array();


$idgrupo = htmlentities($_GET['id_grupo']);
$curso = htmlentities($_GET['curso']);
$semestre = htmlentities($_GET['semestre']);

// echo "esto es lo que llega: ".$idgrupo."  ".$curso." ".$semestre;

$consulta="SELECT * FROM horario WHERE curso='$curso' AND semestre='$semestre'";

// echo ' la consulta es: '.$consulta;

$sel = $con->query($consulta);

if($sel){

     //  var_dump($sel);

     if($sel->num_rows>0){

          $horario = $sel->fetch_assoc();
          $idhorario=$horario['id'];

               //   echo "<br>consiguio la primera consulta el id de horario es: ".$idhorario;

               $sel2 = $con->query("SELECT p.id as p_id, p.nombres as p_nombre, p.apellidos as p_apellido, s.id as s_id, s.nombre as s_nombre, a.id as a_id, a.nombre as a_nombre, g.id AS g_id, g.nombre as g_nombre, t.id as t_id, t.inicio as inicio, t.fin as fin, e.dia, e.id_horario, e.id FROM `sesion` e LEFT JOIN tramos t ON e.id_tramo=t.id LEFT JOIN profesor p ON e.id_profe=p.id LEFT JOIN asignatura s ON e.id_asig=s.id LEFT JOIN aula a ON e.id_aula=a.id LEFT JOIN grupo g ON e.id_grupo=g.id RIGHT JOIN horario h ON e.id_horario='$idhorario'  WHERE g.id='$idgrupo'");

               if($sel2){

                    if($sel2->num_rows==1){

                         //  echo " Si hay ".$sel2->num_rows." sesiones registradas en ese curso, semestre y Grupo";
                         
                         $resul = $sel2->fetch_assoc();
                         
                         if($resul['id']==null){

                              //  echo "Se encontro una registro pero es nulo para ese curso, semestre y grupo";

                               $sel2->close();
                               $con->close();
                         }else{
                    
                              //  echo "<br>si se consiguio 1 sesiones en ese cruso, semestre y grupo";
                              while ($f = $sel2->fetch_assoc()) {
                                   $temporal = $f;
                                   array_push($resultado, $temporal);
                              }
                              echo json_encode($resultado);
                              // echo '<br>este es lo que entregará';                         
                              var_dump($resultado);

                              $sel2->close();
                              $con->close();
                         }
                    }else{
                         // echo "<br>si se consiguio mas de una sesion en ese cruso, semestre y grupo";
                         while ($f = $sel2->fetch_assoc()) {
                              $temporal = $f;
                              array_push($resultado, $temporal);
                         }

                         if(count($resultado)>0){
                              
                              echo json_encode($resultado);                         
                              // echo '<br>este es lo que entregará';
                              var_dump($resultado);

                         }else{
                              // echo '<br>no llega nada';
                         }

                         $sel2->close();
                         $con->close();
               }
               }else{
                    //   echo ' no consiguio hacer la segunda consulta';
               }
     }else{
          // echo ' No hay sesiones registradas en el curso, semestre  y grupo indicado';
     }

}else{
     // echo 'no lo consiguio hacer la primera consulta';

}




?>