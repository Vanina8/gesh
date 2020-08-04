<?php

interface Base_datos
{
// Estado indica conexion o desconexion a la bd
    public function getEstado(); 
    public function getResultado();
    public function getDescriptor();


    public function consulta($consulta);

    public function extraer_registro();

    // public function numero_filas();
    // public function filas_afectadas();
    public function real_escape_string($variable);
    public function close();

}


?>