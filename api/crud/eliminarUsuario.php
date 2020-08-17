
<?php 
include '../conexion.php';
$id = htmlentities($_GET['id']);
$res1=true;
$res2=true;

$idrol = $con->query("SELECT id_rol FROM profesor WHERE id='$id'");
$idrol2 = $idrol->fetch_assoc();

if($idrol2['id_rol']==12){
    $res2=eliminarDTablaProAsig($con, $id);
}
$res1=eliminarDTablaPro($con, $id);

if($res1 && $res2){
    echo "success";
}else{
    echo "fail";
}
$con->close();


function eliminarDTablaPro($con, $idPro){

        $del = $con->prepare("DELETE FROM profesor WHERE id = ? ");
        $del->bind_param("i", $idPro);

        if ($del->execute()) {
            return true;
        } else {
            return false;
        }
}
function eliminarDTablaProAsig($con, $idPro){
        $del = $con->prepare("DELETE FROM profe_asig WHERE id_profe = ? ");
        $del->bind_param("i", $idPro);

        if ($del->execute()) {
            return true;
        } else {
            return false;
        }
}

?>