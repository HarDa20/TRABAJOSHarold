<?php 

$jsonData = file_get_contents('datos.json');
$nombres = json_decode($jsonData, true);
print_r($nombres);

?>