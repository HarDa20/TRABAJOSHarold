<?php  
function filtrarPares($array) {
    return array_filter($array, fn($numero) => $numero % 2 == 0);
    
    }
    
    $numeros = [1, 2, 3, 4, 5, 6];
    $pares = filtrarPares($numeros);
    print_r($pares);
?>