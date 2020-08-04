<?php

interface Data_asignatura{

    public function nueva_asig($codigo, $nombre, $estado);
    public function busca_asig($id);
    public function borrar_asig($id);
    public function modifi_asig($id, $codigo, $nombres, $estado);
    public function consulta_asig();

}

?>