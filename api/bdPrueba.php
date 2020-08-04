<?php

class basePrueba implements Base_datos{

    private $listado;
    private $i=0;

	function __construct($servidor,$usuario,$pass,$base_datos){

    }

    public function getEstado(){   
               return 'conectado';
    } 
    public function getResultado(){

    }
    public function getDescriptor(){

    }


    public function consulta($consulta){
        $this->i=0;
        echo "lo que viene es:".$consulta;
        if($consulta=="SELECT * FROM  PROFESOR"){
            echo "estas en prueba base";
            $this->listado[0]=array("1","Maria", "Sanchez", "23954115t", "micorreo@gmail.com", "iosjfoie", "1");
            $this->listado[1]=array("2","Francis", "Sanchez", "23954115t", "micorreo@gmail.com", "iosjfoie", "1");
            $this->listado[2]=array("3","Luisa", "Sanchez", "23954115t", "micorreo@gmail.com", "iosjfoie", "1");
            

            return $this->listado;
        }

    }

    public function extraer_registro(){
        $this->i++;
        return $this->listado[$this->i--];
    }

    public function real_escape_string($variable){

    }
    public function close(){

    }


}
?>