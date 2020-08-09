
<?php
 
 require_once("../conexion.php");
  
 if($_SERVER['REQUEST_METHOD'] == 'POST'){

     $idgrupo= $_POST['selectedIdGrupo'];
     $semestre= $_POST['selectedSem'];
     $idasig= $_POST['selectedAsig'];
     $idaula= $_POST['idAulaEncendida'];
     $idprofe= $_POST['idProfeEncendido'];
     $year= $_POST['selectedYear'];
     $dias= $_POST['numeroDia'];
     $tramos= $_POST['idTramo'];

     $rest= substr(trim($year), 0, 4);

     $sel = $con->query("SELECT id FROM horario WHERE semestre='$semestre' AND curso='$rest'");

     echo 'Esto el lo que devuelve la consulta :'.$sel;
        // while ($f = $sel->fetch_assoc()) {
        //     $temporal = $f;
        //     array_push($resultado, $temporal);
        // }

    //  $id='';
    //  $i;

    // for($i=0; $i<count($dias); $i++){

    //     $ins1 = $con -> prepare("INSERT INTO sesion VALUES(?,?,?,?,?,?,?,?)"); 
    //     $ins1->bind_param("iiiiiiii",$id,$idaula,$tramos[$indice], $idgrupo, $idasig, $idprofe, $id_horario, $dias[$indice]);

    // }
     
    //  $res1=$ins1->execute();
    //  $res2=$ins2->execute();
 
    //  if ($res1 && $res2) {
    //      echo "success";
    //  } else {
    //      echo "fail";
    //  }
 
 }else{
     echo "fail";
 }
 $sel->close();
 $con->close();
 
 
 ?>
 
 