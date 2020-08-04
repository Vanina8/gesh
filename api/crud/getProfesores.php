<?php
 
require_once("../conexion.php");
require_once("../profesor.php");

@session_start();

$base= Operaciones_data::conexion();

if(!Operaciones_data::seconecto($base)){
    die("la conección no pudo establecierse");
}

$profesor= new Profesor();

$profesores= $profesor->consulta_profe();



echo json_encode($profesores);


// echo '<table class="col-8 text-center">';


// foreach ($profesores as $key => $value) {
//  echo '<tr><th>';
//         echo $value->get_nombres();     
//  echo '</th><th>';
//         echo $value->get_apellidos();            
// // echo '</th><th>';
// //           echo $value[2];
// // echo  '</th><th>';
// //         echo $value[3];            
// // echo '</th><th>';
// //         echo $value[4];            
// // echo '</th></tr>';
// }

// echo '</table>';

?>
