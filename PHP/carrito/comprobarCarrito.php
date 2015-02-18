<?php
session_start();
if(isset($_SESSION['carrito'])){
   $respuesta = array(
    'carrito'  => $_SESSION['carrito']
    );

   
}else{
    
    $respuesta = array(
    'carrito'  => "NO"
    );
    
}
echo json_encode($respuesta);
?>