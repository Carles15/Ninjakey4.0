<?php

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
$sql = "SELECT * FROM clientes";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while ($row = $result->fetch_array(MYSQL_ASSOC)) {
        $myArray[] = $row;
    }
    echo json_encode($myArray);
} else {
    echo "0 results";
}
$conn->close();
?>
