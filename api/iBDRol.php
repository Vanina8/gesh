<?php

interface Data_rol{

    public function nuevo_rol($nombre);
    public function consulta_rol();
    public function borrar_rol($id);
    public function modifi_rol($id, $nombre);
    public function busca_rol($id);

}


?>