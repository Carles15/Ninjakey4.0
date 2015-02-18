<?php

session_start();

$codigo = $_POST['idProducto'];
//echo gettype($codigo); // STRING
//echo gettype($_SESSION['carrito']); //ARRAY


$cont = 0;

$new_array = [];

foreach ($_SESSION['carrito'] as $objeto) {
    $eliminar = "false";
    if ($objeto['CodigoProducto'] != $codigo) {
        array_push($new_array, $objeto);
    }
}
$_SESSION['carrito'] = $new_array;

?>