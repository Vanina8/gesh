<?php

array_push($resultado, $_SESSION['user']);
array_push($resultado, $_SESSION['rol']);

echo json_encode($resultado);

?>