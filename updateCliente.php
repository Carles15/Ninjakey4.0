<?php
#$db = mysql_connect("localhost","root","");
#	mysql_select_db("ninjakey");
	
	
	$servername="localhost";
	$username="root";
	$password="";
	$dbname="ninjakey";
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	
	$codigoCliente = $_POST['CodigoCliente'];
        $nombreCliente = $_POST['NombreCliente'];
        $telefono = $_POST['Telefono'];
        $direccion = $_POST['LineaDireccion1'];
        $ciudad = $_POST['Ciudad'];
        $region = $_POST['Region'];
        $pais = $_POST['Pais'];
        $codigoPostal = $_POST['CodigoPostal'];
        $password = $_POST['Password'];
        $email = $_POST['Email'];
        
//        echo $codigoProducto;
	if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
	}
        
	$sql = "UPDATE clientes SET Email='$email',Password='$password',NombreCliente='$nombreCliente',Telefono='$telefono',LineaDireccion1='$direccion',Ciudad='$ciudad',Region='$region',Pais='$pais',CodigoPostal='$codigoPostal' WHERE CodigoCliente='$codigoCliente'";
        //echo $sql;
	
        
	if ($conn->query($sql) === TRUE) {
                echo "OK";
		die();
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$conn->close();



?>