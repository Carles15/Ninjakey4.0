<?php
#$db = mysql_connect("localhost","root","");
#	mysql_select_db("ninjakey");
	
	
	$servername="localhost";
	$username="root";
	$password="";
	$dbname="ninjakey";
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	
	$codigoProducto = $_POST['cod'];
//        echo $codigoProducto;
//
	if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
	}
        
	$sql = "DELETE FROM productos WHERE CodigoProducto='$codigoProducto'";
        //echo $sql;
	
        
	if ($conn->query($sql) === TRUE) {
                echo "OK";
		die();
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$conn->close();



?>