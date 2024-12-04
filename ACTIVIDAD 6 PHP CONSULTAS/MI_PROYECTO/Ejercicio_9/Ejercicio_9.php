<?php 
function promedioArray($array) {
    return array_sum($array) / count($array);
    
    }
    
    $numeros = [4, 5, 8, 10];
    echo "El promedio es: ". promedioArray($numeros);
?>          