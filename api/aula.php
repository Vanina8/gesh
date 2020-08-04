<?php

Class Aula{

public $_id;
public $_nombre;
public $_estado;

function __construct($p_id = null, $p_nombre, $p_estado){
        $cont=  func_num_args();
        if($count>0){
            if($count==1){  // se supone que viene el ID
                $this->set_id(func_get_arg(0));
            }else if($count==2){  // se supone que viene Nombre y Estado
                $this->set_nombre(func_get_arg(0));
                $this->set_estado(func_get_arg(1));                
            }else if($count==3){   // se supone que vienen todos 
                $this->set_id(func_get_arg(0));
                $this->set_nombre(func_get_arg(1));
                $this->set_estado(func_get_arg(2));
            }
        }
}
    
    function get_id() {
        return $this->_id;
    }

    function get_nombre() {
        return $this->_nombre;
    }

    function get_estado() {
        return $this->_estado;
    }

    function set_id($_id) {
        $this->_id = $_id;
    }

    function set_nombre($_nombre) {
        $this->_nombre = $_nombre;
    }

    function set_estado($_estado) {
        $this->_estado = $_estado;
    }

    function nueva_aula(){

}
function modifi_aula(){

}
function borrar_aula($p_id){

}
function consulta_aula(){
    return 0;
}
}
?>
