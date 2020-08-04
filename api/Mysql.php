<?php


class Base implements Base_datos
{
	private $servidor;
	private $usuario;
	private $pass;
	private $base_datos;
	public $descriptor;
	public $resultado;
	public $estado;
	
	function __construct($servidor,$usuario,$pass,$base_datos)
	{
		$this->servidor = $servidor;
		$this->usuario = $usuario;
		$this->pass = $pass;
		$this->base_datos = $base_datos;
	
		$this->conectar_base_datos();		
	}
	public function getEstado(){
		return $this->estado;
	}

	private function setEstado($parametro){
		return $this->estado=$parametro;
	}

	public function getDescriptor(){
		return $this->descriptor;
	}

	public function getResultado(){
		return $this->resultado;
	}

	private function conectar_base_datos()
	{ 
		$this->descriptor = mysqli_connect($this->servidor,$this->usuario,$this->pass, $this->base_datos);
		if($this->descriptor->connect_errno){
			$this->setEstado("desconectado");
		}else{
			$this->setEstado("conectado");
		}
	}

	public function consulta($consulta)
	{
	
		$this->resultado = mysqli_query($this->descriptor, $consulta);
	}

	public function extraer_registro()
	{
	
		
		if ($fila = mysqli_fetch_array($this->getResultado(), MYSQLI_BOTH)) {
			return $fila;
		} else {
			return false;
		}
	}

	public function numero_filas()
	{
		return mysqli_num_rows($this->resultado);
	}

	public function filas_afectadas()
	{
		return mysqli_affected_rows($this->descriptor);
	}

	public function real_escape_string($variable){
		return mysqli_real_escape_string($this->descriptor, $variable);
	}

	public function close(){
		mysqli_close($this->descriptor);
	}
}
?>