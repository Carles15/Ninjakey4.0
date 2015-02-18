<?php
#$db = mysql_connect("localhost","root","");
#	mysql_select_db("ninjakey");
	
	
	$servername="localhost";
	$username="root";
	$password="";
	$dbname="ninjakey";
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	
	$nombre = $_POST['NombreCliente'];
	$telefono = $_POST['Telefono'];
	$direccion = $_POST['LineaDireccion1'];
	$ciudad = $_POST['Ciudad'];
	$cp = $_POST['CodigoPostal'];
	$region = $_POST['Region'];
	$pais = $_POST['Pais'];
	$email = $_POST['Email'];
	$password = $_POST['Password'];


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
                echo "OK";
		die();
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$conn->close();



?>