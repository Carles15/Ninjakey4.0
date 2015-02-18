<?php
session_start();
session_unset();
session_destroy();

session_start();
$_SESSION['id']=0;
$_SESSION['name'] = 'Invitado';
$_SESSION['carrito'] = array();
$respuesta = array(
    'id'  => $_SESSION['id'],
    'name' => $_SESSION['name'],
    'carrito'  => $_SESSION['carrito'],
);
echo json_encode($respuesta);
?>