
<?php
include_once("bdMsqlProfe.php");
include_once("rol.php");

Class Profesor {
	
	public $_id=null;
	public $_nombres=null;
	public $_apellidos=null;
	public $_dni=null;
    public $_email=null;
	public $_clave=null;
    public $_estado=null;
    public $_telefono=null;    
    public $_rol = null;      // id rol se supone tipo entero

            function __construct(){
        
                switch(func_num_args()){
                    case 1:  // se supone que envian solo el ID // esto ocurre para eliminar un registro
                         $this->set_id(func_get_arg(0));  
                    case 8:  // se supone que envian casi todos los argumentos  // esto ocurre para nuevo profesores
                        $this->set_nombres(func_get_arg(0));
                        $this->set_apellidos(func_get_arg(1));
                        $this->set_dni(func_get_arg(2));                    
                        $this->set_email(func_get_arg(3));                    
                        $this->set_clave(func_get_arg(4));                    
                        $this->set_estado(func_get_arg(5));                    
                        $this->set_rol(func_get_arg(6));  
                        $this->set_telefono(func_get_arg(7));  
                                                      
                        $this->set_id("");
                    break;
                    case 9: // se supone que envian todos los argumentos  // esto ocurre para listar profesores
                        $this->set_id(func_get_arg(0));
                        $this->set_nombres(func_get_arg(1));
                        $this->set_apellidos(func_get_arg(2));
                        $this->set_dni(func_get_arg(3));                    
                        $this->set_email(func_get_arg(4));                    
                        $this->set_clave(func_get_arg(5));                    
                        $this->set_estado(func_get_arg(6));                    
                        $this->set_rol(func_get_arg(7));                    
                        $this->set_telefono(func_get_arg(8));  
                    break;
                  }
            }

            function get_id() {
                return $this->_id;
            }

            function get_nombres() {
                return $this->_nombres;
            }

            function get_apellidos() {
                return $this->_apellidos;
            }

            function get_estado() {
                return $this->_estado;
            }

            function get_dni() {
                return $this->_dni;
            }

            function get_email() {
                return $this->_email;
            }

            function get_clave() {
                return $this->_clave;
            }
            function get_rol() {
                return $this->_rol;
            }

            function get_telefono() {
                return $this->_telefono;
            }
            

            function set_id($_id) {
                $this->_id = $_id;
            }

            function set_nombres($_nombres) {
                $this->_nombres = $_nombres;
            }

            function set_apellidos($_apellidos) {
                $this->_apellidos = $_apellidos;
            }

            function set_estado($_estado) {
                $this->_estado = $_estado;
            }

            function set_dni($_dni) {
                $this->_dni = $_dni;
            }
            function set_email($_email) {
                $this->_email = $_email;
            }

            function set_clave($_clave) {
                $this->_clave = $_clave;
            }
            function set_telefono($_telefono) {
                $this->_telefono = $_telefono;
            }
            function set_rol($_rol) {
                $this->_rol = $_rol;
            }


    function nuevo_profe(){
    
        if(Profesor_data_mysql::nuevo_profe($this->get_nombres(), $this->get_apellidos(), $this->get_dni(), $this->get_email(), $this->get_clave(), $this->get_estado(), $this->get_rol()->get_id(), $this->get_telefono())){
            return true;
        }else{
            return false;
        }
    }
    
	function modifi_profe($p_profesor){
        if(Profesor_data_mysql::modifi_profesor($p_profesor->get_id, $p_profesor->get_nombres(), $p_profesor->get_apellidos, $p_profesor->get_dni(), $p_profesor->get_email(), $p_profesor->get_clave(), $p_profesor->get_estado(), $p_profesor->get_rol()->get_id(), $this->get_telelfono())){
            return true;

        }else{
            return false;
        }
    }
    
	function borrar_profe($p_profesor){
        if(Profesor_data_mysql::borrar_profesor($p_profesor->get_id())){
            return true;

        }else{
            return false;
        }
    }
    
	function consulta_profe(){
		return Profesor_data_mysql::consulta_profe();
    }
    function buscar_profe(){
        return Profesor_data_mysql::busca_profe($this->get_id());
    }

    function busca_profe_login(){
        return Profesor_data_mysql::busca_profe_login($this->get_email());
    }
    
	function mostrar(){
			return "Id: ".$this->get_id()." nombres: ".$this->get_nombres()." apellidos: ".$this->get_apellidos()." dni: ".$this->get_dni()." email: ".$this->get_email()." clave: ".$this->get_clave()."Rol: ".$this->get_rol()." telefono:".$this->get_telefono();
    }
    

}
?>
