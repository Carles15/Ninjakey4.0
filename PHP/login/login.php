<?php
session_start();
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
$email = $_POST['email'];
$pass = $_POST['password'];


$conn = new mysqli($servername, $username, $password);
mysqli_select_db($conn, $dbase_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT CodigoCliente, NombreCliente FROM clientes WHERE Email='$email' and Password='$pass'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while ($row = $result->fetch_array(MYSQL_ASSOC)) {
        $TheArray[] = $row;
        $_SESSION['id'] = $row['CodigoCliente'];
        $_SESSION['name'] = $row['NombreCliente'];
    }
    echo json_encode($TheArray);
} else {
    $arrayInvitado = array("CodigoCliente" => 0, "NombreCliente" => "Invitado");
    echo json_encode($arrayInvitado);
    
}
$conn->close();
?>
