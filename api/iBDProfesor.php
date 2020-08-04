<?php

interface Data_profesor{

    public function nuevo_profe($nombres, $apellidos, $dni, $usuario, $clave, $estado, $id_rol, $telefono);
    public function busca_profe($id);
    public function borrar_profe($id);
    public function modifi_profe($id, $nombres, $apellidos, $dni, $usuario, $clave, $estado, $id_rol, $telefono);
    public function consulta_profe();
    public function busca_profe_login($email);

}

?>