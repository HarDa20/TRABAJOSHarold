<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="Ejercicio_6.php" method="post">
    Nombre: <input type="text" name="nombre" required>
    Correo: <input type="email" name="correo" required>
    <button type="submit">Guardar</button>
    </form>
</body>
</html>


<?php 
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    
    $linea = "Nombre: $nombre, Correo: $correo" . PHP_EOL;
    file_put_contents('usuarios.txt', $linea, FILE_APPEND);
    echo "Datos guardados en usuarios.txt";
}
?>