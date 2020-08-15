
<?php



// echo ' entra a horario.php';

function traeIdHorario($curso, $semestre, $con){

    // echo ' aca entro a traeIdHorario';
    $cursoCortado = (strlen($curso)>4) ? substr($curso, 0, 4) : $curso ;

    $consulta="SELECT * FROM horario WHERE curso='$cursoCortado' AND semestre='$semestre'";

    $sel = $con->query($consulta);

    if($sel){

        if($sel->num_rows>0){

            $horario = $sel->fetch_assoc();
            $idhorario=$horario['id'];
            return $idhorario;
        }else{
            regHorarioNuevo($cursoCortado, $semestre, $con);            
            return traeIdHorario($cursoCortado, $semestre, $con);
        }
    }

}

function regHorarioNuevo($curso, $semestre, $con){

    $id='';

    $ins1 = $con -> prepare("INSERT INTO horario VALUES(?,?,?)");
    $ins1->bind_param("iis",$id, $semestre, $curso);

    $ins1->execute();
}

?>