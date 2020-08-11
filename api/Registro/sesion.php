
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
     $idhorario= $_POST['idhorario'];

     $id='';
     $i;

    for($i=0; $i<count($dias); $i++){

        $ins1 = $con -> prepare("INSERT INTO sesion VALUES(?,?,?,?,?,?,?,?)"); 
        $ins1->bind_param("iiiiiiii",$id,$idaula,$tramos[$i], $idgrupo, $idasig, $idprofe, $idhorario, $dias[$i]);
        $res1=$ins1->execute();
    }     
     
     if ($res1) {
         echo "success";
     } else {
         echo "fail";
     }
 
 }else{
     echo "fail";
 }
 $sel->close();
 $con->close();

 ?>
 
 