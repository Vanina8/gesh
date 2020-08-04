<?php


require_once('conexion.php');
require_once('iBDTitulo.php');
require_once('titulo.php');


class Titulo_data_mysql implements Data_titulo{


   function nuevo_titulo($nombre, $curso){
        if(Operaciones_data::consulta2("INSERT INTO titulo (nombre, curso) VALUES ('$nombre', '$curso')")){
            return "true";
        }else{
            return "false";
        }
    }    
    function consulta_titulo(){
        $lista_titulo;
        $matriz_titulo= Operaciones_data::consulta1("SELECT * FROM  TITULO ");
            foreach ($matriz_titulo as $key => $value) {
                $lista_titulo[]= new Titulo ($value[0], $value[1], $value[2]);
            }
        return $lista_titulo;
    }
    
    function borrar_titulo($p_id){
        if( consulta2("DELETE FROM TITULO WHERE id=".$p_id)){
            return true;
        }else{
            return false;
        }
    }
    function modifi_titulo($p_id, $p_nombre, $p_curso ){
        if (consulta2("UPDATE TITULO SET nombre='$p_nombre' curso='$p_curso' WHERE id=".$p_id)){
            return true;
        }else{
            return false;
        }
    }
    function busca_titulo($p_id){
            return consulta4("SELECT * FROM TITULO WHERE id=".$p_id);
    }
    


}


?>