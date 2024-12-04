<?php 
function generarListaHTML($array) {
    echo "<ul>";
    foreach ($array as $item) {
        echo "<li>$item</li>";
    }
    echo "</ul>";
}
$elementos = ["PHP", "JavaScript", "HTML", "CSS"];
generarListaHTML($elementos);
?>