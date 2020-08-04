<?php

require_once("conexion.php");
require_once("iBDProfesor.php");
require_once("profesor.php");

class Profesor_data_mysql implements Data_profesor{


    function nuevo_profe($p_nombres, $p_apellidos, $p_dni, $p_email, $p_clave, $p_estado, $p_id_rol, $p_telefono){


        if(Operaciones_data::consulta2("INSERT INTO profesor (nombres, apellidos, dni, email, clave, estado, id_rol, telefono) VALUES ('$p_nombres', '$p_apellidos', '$p_dni', '$p_email', '$p_clave', $p_estado, $p_id_rol, $p_telefono)")){
            return "true";
        }else{
            return "false";
        }

    }
    function busca_profe($p_id){

        $profeEncontrado= null;
        $profe= Operaciones_data::consulta4("SELECT * FROM PROFESOR WHERE id=".$p_id);
        
        if($profe <> null){
            $profeEncontrado= new Profesor($profe[0],$profe[1],$profe[2],$profe[3],$profe[4],$profe[5],$profe[6],$profe[7], $profe[8]);
        }
        return $profeEncontrado;
    }

    function borrar_profe($p_id){
        if(  Operaciones_data::consulta2("DELETE FROM PROFESOR WHERE id=".$p_id)){
            return true;
        }else{
            return false;
        }
    }
    function modifi_profe($p_id, $p_nombres, $p_apellidos, $p_dni, $p_email, $p_clave, $p_estado, $p_id_rol, $p_telefono ){

        if ( Operaciones_data::consulta2("UPDATE PROFESOR SET nombres='$p_nombres', apellidos='$p_apellidos', dni = '$p_dni', email ='$p_email', clave = '$p_clave', estado='$p_estado', id_rol='$p_id_rol', telefono='$p_telefono' WHERE id=".$p_id)){
            return true;
        }else{
            return false;
        }
    }
    function consulta_profe(){
        $lista_profesor=null;
    
        $matriz_profesor=  Operaciones_data::consulta1("SELECT * FROM  PROFESOR");
        if( $matriz_profesor<>null){
            foreach ($matriz_profesor as $key => $value) {
                    $lista_profesor[]= new Profesor ($value[0], $value[1], $value[2], $value[3], $value[4], $value[5], $value[6], $value[7], $value[8]);
            }
        }
        return $lista_profesor;
        // return $matriz_profesor;
    }
    function busca_profe_login($p_email){
        
        // echo " aca me traer el email: ".$p_email."<br>";
        $consulta="SELECT * FROM PROFESOR WHERE email='".$p_email."'";
        // echo " esta es la consulta que hacemos:".$consulta;

        $profeEncontrado= null;
        $profe= Operaciones_data::consulta3($consulta);
        
        if($profe <> null){
            $profeEncontrado= new Profesor($profe[0],$profe[1],$profe[2],$profe[3],$profe[4],$profe[5],$profe[6],$profe[7], $profe[8]);
        }
        return $profeEncontrado;
    }

    function __destruct(){

        
    }

}


?>