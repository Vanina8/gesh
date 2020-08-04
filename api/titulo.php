<?php

include_once("bdMsqlRol.php");

Class Titulo{
	public $_id=0;
	public $_nombre;
	public $_curso;

        function get_id() {
            return $this->_id;
        }

        function get_nombre() {
            return $this->_nombre;
        }

        function get_curso() {
            return $this->_curso;
        }

        function set_id($p_id) {
            $this->_id = $p_id;
        }

        function set_nombre($p_nombre) {
            $this->_nombre = $p_nombre;
        }

        function set_curso($_nombre) {
            $this->_curso = $p_nombre;
        }
        
	function __construct($data = null){
		$this->_id=$p_id;
		$this->_nombre=$p_nombre;
        $this->_curso=$p_curso;
        

        switch(func_num_args()){

            case 0:
                $this->set_id("");
                $this->set_nombre("");          
                $this->set_curso("");          
            break;
            case 2:
                $this->set_id("");
                $this->set_nombre(func_get_arg(0));        
                $this->set_curso(func_get_arg(1));        
            break;
        }
	}
	function nuevo_titulo(){

	}
	function modifi_titulo(){

	}
	function borrar_titulo(){

    }
    function consulta_titulo(){

    }
    function buscar_titulo(){

    }
    
	
}


?>