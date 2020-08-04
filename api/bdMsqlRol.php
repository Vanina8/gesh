<?php


require_once('conexion.php');
require_once('iBDRol.php');
require_once('rol.php');


class Rol_data_mysql implements Data_rol{


   function nuevo_rol($nombre){
        if(Operaciones_data::consulta2("INSERT INTO rol (nombre) VALUES ('$nombre')")){
            return "true";
        }else{
            return "false";
        }
    }    
    function consulta_rol(){
        $lista_roles;
        $matriz_roles= Operaciones_data::consulta1("SELECT * FROM  ROL ");
            foreach ($matriz_roles as $key => $value) {
                $lista_roles[]= new Rol ($value[0], $value[1]);
            }
        return $lista_roles;
    }
    
    function borrar_rol($p_id){
        if( consulta2("DELETE FROM ROL WHERE id=".$p_id)){
            return true;
        }else{
            return false;
        }
    }
    function modifi_rol($p_id, $p_nombre ){
        if (consulta2("UPDATE ROL SET nombre='$p_nombre' WHERE id=".$p_id)){
            return true;
        }else{
            return false;
        }
    }
    function busca_rol($p_id){
            return consulta4("SELECT * FROM ROL WHERE id=".$p_id);
    }
    


}


?>
