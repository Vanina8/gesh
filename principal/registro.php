<?php   include '../includes/header.php';

        @session_start();
        if($_SESSION['rol']=='Administrador'){

                include "../includes/menucompleto.php";

        }else if($_SESSION['rol']=='Coordinador'){

                include "../includes/menucoordinadores.php";

        }else if($_SESSION['rol']=='Profesor'){

                include "../includes/menuprofesores.php";
        }

 
        include 'registro_con.php';

        include "../includes/footerLogin.php";
?>
