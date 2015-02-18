<?php
session_start();
if(isset($_SESSION['id'])){
   $respuesta = array(
    'id'  => $_SESSION['id'],
    'name' => $_SESSION['name'],
    'carrito'  => $_SESSION['carrito'],
    );

}else{
    $_SESSION['id']=0;
    $_SESSION['name'] = 'Invitado';
    $_SESSION['carrito'] = array();
    $respuesta = array(
    'id'  => $_SESSION['id'],
    'name' => $_SESSION['name'],
    'carrito'  => $_SESSION['carrito'],
    );
    
}

header('Content-type: application/json');
echo json_encode($respuesta);
?>