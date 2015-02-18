<?php
#$db = mysql_connect("localhost","root","");
#	mysql_select_db("ninjakey");
	
	
	$servername="localhost";
	$username="root";
	$password="";
	$dbname="ninjakey";
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	
	$estado = $_POST['Estado'];
	$comentarios = $_POST['Comentarios'];
	$codigocliente = $_POST['CodigoCliente'];


	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
        
	$sql = "INSERT INTO pedidos (Estado, Comentarios, CodigoCliente)VALUES ('$estado','$comentarios','$codigocliente')";
        
	
        
	if ($conn->query($sql) === TRUE) {
                echo "OK";
		die();
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$conn->close();



?>