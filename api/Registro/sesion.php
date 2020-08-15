
<?php
  
 if($_SERVER['REQUEST_METHOD'] == 'POST'){
    grabar();
 
 }else{

    echo "fail";
 }
 
 function grabar(){

    include '../conexion.php';
    include 'horario.php';
    
           $idgrupo= $_POST['selectedIdGrupo'];
            $semestre= $_POST['selectedSem'];
            $idasig= $_POST['selectedAsig'];
            $idaula= $_POST['idaulaEncendida'];
            $idprofe= $_POST['idProfeEncendido'];
            $year= $_POST['selectedYear'];
            $dias= $_POST['numeroDia'];
            $tramos= $_POST['idTramo'];
            $idhorario= $_POST['idHorario'];
            $curso=$_POST['curso'];
            $semestre= $_POST['seme'];
           
        if($idhorario==-1){
            $idhorario = traeIdHorario($curso, $semestre, $con);
        }

        if($idhorario==''){
            echo 'fail';
            $con->close();
            return;
        }

        $dArray= explode(',', $dias);
        $tArray= explode(',', $tramos);
        $id='';
        $i;
        if(count($dArray)>1){
 
            for($i=0; $i<count($dArray); $i++){


                $d=$dArray[$i];
                $t=$tArray[$i];
                $ins1 = $con -> prepare("INSERT INTO sesion VALUES(?,?,?,?,?,?,?,?)"); 
                $ins1->bind_param("iiiiiiii",$id,$idaula, $t, $idgrupo, $idasig, $idprofe, $idhorario, $d );
                $res1=$ins1->execute();
            }     
        }else{

            $ins1 = $con -> prepare("INSERT INTO sesion VALUES(?,?,?,?,?,?,?,?)"); 
            $ins1->bind_param("iiiiiiii",$id, $idaula, $tArray[0], $idgrupo, $idasig, $idprofe, $idhorario, $dArray[0]);
            $res1=$ins1->execute();
        }        
        $v = ($res1) ? 'success' : 'fail';
        echo $v;
        $con->close();
}


?>
 
 