<?php

session_start();

/* * **********LOCAL************ */
$servername = "localhost";
$username = "root";
$password = "";
$dbase_name = "ninjakey";
/* * *************************** */

$idProducto = $_POST['idProducto'];

$conn = new mysqli($servername, $username, $password);
mysqli_select_db($conn, $dbase_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$SQL = "Select * from productos where CodigoProducto='$idProducto'";

$result = $conn->query($SQL);

if($result === FALSE) { 
    die(mysql_error()); // TODO: better error handling
}

$fila = $result->fetch_array(MYSQL_ASSOC);

$datos = array('CodigoProducto' => $fila["CodigoProducto"], 'Nombre' => $fila["Nombre"], 'Categoria' => $fila["Categoria"], 'Descripcion' => $fila["Descripcion"], 'CantidadEnStock' => $fila["CantidadEnStock"], 'PrecioVenta' => $fila["PrecioVenta"], 'UrlImagen' => $fila["UrlImagen"]);


array_push($_SESSION['carrito'], $datos);

echo json_encode($datos);


?>