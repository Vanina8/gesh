<?php
 
require_once("../conexion.php");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
  
     $profe=$_POST['cod_profe'];
     $asigna= $_POST['cod_asig'];
     $ins2 = '';
     $respuesta='';    
     for($i=0; $i<count($asigna); $i++ ){
        $ins1 = $con->query("SELECT * FROM profe_asig WHERE id_profe='$profe' and id_asig='$asigna[$i]'");

        if(!($ins1->num_rows>0)){
            $ins2 = $con -> query("INSERT INTO profe_asig ( id_profe, id_asig) values ('$profe', '$asigna[$i]')");
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