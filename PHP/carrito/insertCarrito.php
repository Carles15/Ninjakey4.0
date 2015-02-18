<?php
session_start();
$_SESSION['carrito'] = $_POST['carritoJson'];
$carrito = $_POST['carritoJson'];
$id = $_SESSION['id'];

/* * **********LOCAL************ */
$servername = "localhost";
$username = "root";
$password = "";
$dbase_name = "ninjakey";
/* * *************************** */

/* * **************OPENSHIFT******************
  $servername = $_ENV['OPENSHIFT_MYSQL_DB_HOST'];
  $username = "admin7fxwY4n";
  $password = "fu1E2pvnLhlM";
  $dbase_name = "pruebaninjakey";
 * ***************************************** */

$conn = new mysqli($servername, $username, $password);
mysqli_select_db($conn, $dbase_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}




if($id != 0){
    $fecha = date('Y\-n\-j');
    $sql = "INSERT INTO pedidos (FechaPedido, Estado, Comentarios, CodigoCliente) VALUES ('$fecha','Pendiente','','$id')";
    $result = $conn->query($sql);
}


$sql2 = "SELECT max(CodigoPedido) from PEDIDOS";
$result = $conn->query($sql2);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_array(MYSQL_ASSOC)) {
        $maxId= $row["max(CodigoPedido)"];
    }
} else {
    echo "No funcoina el SELECT MAX";
}

//$_SESSION['carrito'] = new stdClass();
$data = json_decode($carrito);
$precio_total=0;
foreach($data as $object){
    $codigo = $object -> CodigoProducto;
    $cantidad = $object -> Cantidad;
    $preciounidad = $object -> PrecioUnidad;
    
    $precio_total=($preciounidad*$cantidad)+$precio_total;
    $sql3 = "INSERT INTO detallepedidos VALUES ($maxId,$codigo,$cantidad,$preciounidad)";
    $result = $conn->query($sql3);
}


$conn->close();
$datos=array("id"=>$maxId,"precio_total"=>$precio_total);
echo json_encode($datos);
?>
