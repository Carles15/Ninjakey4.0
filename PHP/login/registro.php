<?php
#$db = mysql_connect("localhost","root","");
#	mysql_select_db("ninjakey");
include './dataSource.php';
$db = mysql_connect($servername, $username, $password);
mysql_select_db($dbase_name);	
/*	
	$servername="localhost";
	$username="root";
	$password="";
	$dbname="ninjakey";
	*/
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	
	$nombre = $_POST['nombre'];
	$telefono = $_POST['telefono'];
	$direccion = $_POST['direccion'];
	$ciudad = $_POST['ciudad'];
	$cp = $_POST['cp'];
	$region = $_POST['region'];
	$pais = $_POST['pais'];
	$email = $_POST['email'];
	$password = $_POST['password'];


	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
	
	$sql = "INSERT INTO clientes (NombreCliente, Telefono, LineaDireccion1, Ciudad, Region, Pais, CodigoPostal, Password, Email) 
	VALUES 
	('$nombre',
	'$telefono',
	'$direccion',
	'$ciudad',
	'$region',
	'$pais',
	'$cp',
	'$password',
	'$email');";
	
	if ($conn->query($sql) === TRUE) {
		echo "New record created successfully";
		header("Location: http://localhost/");
		die();
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$conn->close();



?>
