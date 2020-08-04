<?php

require_once("conexion.php");
require_once("iBDAsignatura.php");
require_once("asignatura.php");

class Asignatura_data_mysql implements Data_asignatura{


    function nueva_asig($p_codigo, $p_nombre, $p_estado){


        if(Operaciones_data::consulta2("INSERT INTO ASIGNATURA (codigo, nombre, estado) VALUES ('$p_codigo', '$p_nombre', '$p_estado')")){
            return "true";
        }else{
            return "false";
        }

    }
    function busca_asig($p_id){

        $asigEncontrado= null;
        $asig= Operaciones_data::consulta4("SELECT * FROM Asignatura WHERE id=".$p_id);
        
        if($asig <> null){
            $asigEncontrado= new Asignatura($asig[0], $asig[1], $asig[2], $asig[3]);
        }
        return $profeEncontrado;
    }

    function borrar_asig($p_id){
        if(  Operaciones_data::consulta2("DELETE FROM Asignatura WHERE id=".$p_id)){
            return true;
        }else{
            return false;
        }
    }
    function modifi_asig($p_id, $p_codigo, $p_nombre, $p_estado ){

        if ( Operaciones_data::consulta2("UPDATE Asignatura SET codigo='$p_codigo', nombre='$p_nombre', estado='$p_estado'")){
            return true;
        }else{
            return false;
        }
    }
    function consulta_asig(){
        $lista_Asignatura=null;
        $matriz_Asignatura = Operaciones_data::consulta1("SELECT * FROM  Asignatura");
        if( $matriz_Asignatura<>null){
            foreach ($matriz_Asignatura as $key => $value) {
                    $lista_Asignatura[]= new Asignatura ($value[0], $value[1], $value[2], $value[3]);
            }
        }
        return $lista_Asignatura;
    }

    function __destruct(){

    }

}


?>