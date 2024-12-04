<?php 

$nombres = ["Juan", "Ana", "Carlos"];
$jsonData = json_encode($nombres, JSON_PRETTY_PRINT);
file_put_contents('datos.json', $jsonData);
echo "Datos guardados en datos.json";

?>