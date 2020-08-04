<?php

include_once("bdMsqlRol.php");

Class Rol{
	public $_id;
	public $_nombre;
                
            function __construct($data = null){

                switch(func_num_args()){

                    case 0:
                        $this->set_id("");
                        $this->set_nombre("");          
                    break;
                    case 1:
                        if(gettype(func_get_arg(0))=="string"){
                            $this->set_id(null) ;
                            $this->set_nombre(func_get_arg(0));
        
                        }else{
                            $this->set_id(func_get_arg(0));
                            $this->set_nombre(null);	
                        }
                    break;
                    case 2:
                        $this->set_id(func_get_arg(0));
                        $this->set_nombre(func_get_arg(1));        
                    break;

                }

            }

            function set_id($parametro){
                $this->_id=$parametro;
            }

            function set_nombre($parametro){
                $this->_nombre=$parametro;
            }

            function get_id(){
                return $this->_id;
            }
            function get_nombre(){
                return $this->_nombre;
            }


    function nuevo_rol(){
		if(Rol_data_mysql::nuevo_rol($this->get_nombre())){
			return true;
		}else{
			return false;
		}
    }
    
	function modifi_rol($rol){
		if(Rol_data_mysql::modifi_rol($rol->get_id(), $rol->get_nombre())){
			return true;
		}else{
			return false;
		}
	}

	function borrar_rol($rol){
		if(Rol_data_mysql::borrar_rol($rol->get_id())){
			return true;
		}else{
			return false;
		}
    }
    
	function consulta_rol(){		
		return Rol_data_mysql::consulta_rol();
    }
    
	function mostrar(){
		return "id: ".$this->_id." nombre de rol: ".$this->_nombre;
    }
    
}


?>