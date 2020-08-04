<?php
include_once "conexion.php";

Class Asignatura{
	public $_id=0;
	public $_codigo;
	public $_nombre;
	public $_estado;

        function get_id() {
            return $this->_id;
        }

        function get_codigo() {
            return $this->_codigo;
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

        function set_codigo($_codigo) {
            $this->_codigo = $_codigo;
        }

        function set_nombre($_nombre) {
            $this->_nombre = $_nombre;
        }

        function set_estado($_estado) {
            $this->_estado = $_estado;
        }
               
        
	function __construct($p_id, $p_codigo, $p_nombre, $p_estado){
		$this->codigo=$p_id;
		$this->codigo=$p_codigo;
		$this->codigo=$p_nombre;
		$this->codigo=$p_estado;
	}
	function nueva_asignatura(){

	}
	function modifi_asignatura(){

	}
	function borrar_asignatura(){

	}
	function consulta_asignatura(){

	}
}


?>