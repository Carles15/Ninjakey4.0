<?php
#$db = mysql_connect("localhost","root","");
#	mysql_select_db("ninjakey");
	
	
	$servername="localhost";
	$username="root";
	$password="";
	$dbname="ninjakey";
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	
	$codigoProducto = $_POST['CodigoProducto'];
        $nombre = $_POST['Nombre'];
        $categoria = $_POST['Categoria'];
        $descripcion = $_POST['Descripcion'];
        $stock = $_POST['CantidadEnStock'];
        $precio = $_POST['PrecioVenta'];
        $url = $_POST['UrlImagen'];

//        echo $codigoProducto;
	if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
	}
        
	$sql = "UPDATE productos SET Nombre='$nombre',Categoria='$categoria',Descripcion='$descripcion',CantidadEnStock='$stock',PrecioVenta='$precio',UrlImagen='$url' WHERE CodigoProducto='$codigoProducto'";
        //echo $sql;
	
        
	if ($conn->query($sql) === TRUE) {
                echo "OK";
		die();
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$conn->close();



?>