<?php

include 'dataSource.php';


$conn = new mysqli($servername, $username, $password);
mysqli_select_db($conn, $dbase_name);

$encryptedData = $_GET['encriptation'];
//$decryption = 3365498;
//$decryptedData = $encryptedData * $decryption;
$decryptedData= $encryptedData;

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "select * from pedidos where CodigoPedido = '$decryptedData'";
$result = $conn->query($sql);


if ($result->num_rows > 0) {


$sql2 = "UPDATE pedidos SET estado='Pagado' where CodigoPedido='$decryptedData'";
$result2 = $conn->query($sql2);


echo "Su pago esta siendo verificado por Ninjakey, aguarde unos segundos";
sleep(2000);
header('Location: http://localhost/ninjakey2.0-FINAL/');

}

?>