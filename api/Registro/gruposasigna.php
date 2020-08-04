<?php
 
require_once("../conexion.php");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
  
     $grupo=$_POST['cod_grupo'];
     $asigna= $_POST['cod_asig'];
     $ins2 = '';
     $respuesta='';    
     for($i=0; $i<count($asigna); $i++ ){
        $ins1 = $con->query("SELECT * FROM grupo_asig WHERE id_grupo='$grupo' and id_asig='$asigna[$i]'");

        if(!($ins1->num_rows>0)){
            $ins2 = $con -> query("INSERT INTO grupo_asig ( id_grupo, id_asig) values ('$grupo', '$asigna[$i]')");
            if($ins2){
                $respuesta=+'1';
            }else{
                $respuesta=+'0';
            }
        }
     }

    if (strpos($respuesta, '0')) {
        echo "fail";
    } else {
        echo "success";
    }

}else{
    echo "fail";
}

?>