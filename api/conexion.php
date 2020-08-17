<?php @session_start();
$con = new mysqli('localhost','root','','geshorario');
if ($con->connect_errno) {
    die("La conexion no pudo establecerse");
}
mysqli_set_charset($con, "utf8");
 ?>