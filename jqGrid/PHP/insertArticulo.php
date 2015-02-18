<?php
#$db = mysql_connect("localhost","root","");
#	mysql_select_db("ninjakey");
	
	
	$servername="localhost";
	$username="root";
	$password="";
	$dbname="ninjakey";
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	
	$nombre = $_POST['Nombre'];
	$categoria = $_POST['Categoria'];
	$descripcion = $_POST['Descripcion'];
	$stock = $_POST['CantidadEnStock'];
        $precio = $_POST['PrecioVenta'];
	$url = $_POST['UrlImagen'];


	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
        
	$sql = "INSERT INTO productos (Nombre, Categoria, Descripcion, CantidadEnStock, PrecioVenta, UrlImagen)VALUES ('$nombre','$categoria','$descripcion',$stock,$precio,$url)";
        
	
        
	if ($conn->query($sql) === TRUE) {
                echo "OK";
		die();
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$conn->close();



?>