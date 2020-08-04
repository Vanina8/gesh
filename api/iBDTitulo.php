<?php

interface Data_titulo{

    public function nuevo_titulo($p_nombre, $p_curso);
    public function consulta_titulo();
    public function borrar_titulo($p_id);
    public function modifi_titulo($p_id, $_nombre, $p_curso);
    public function busca_titulo($p_id);

}
?>