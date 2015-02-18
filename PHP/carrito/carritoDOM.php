<?php
	/*****************LOCAL********************/
	$db = mysql_connect("localhost","root","");
	mysql_select_db("ninjakey");
	$ids = $_POST['ids'];
	/*******************************************/

        /****************OPENSHIFT******************
	$db = mysql_connect($_ENV['OPENSHIFT_MYSQL_DB_HOST'],"admin7fxwY4n","fu1E2pvnLhlM");
	mysql_select_db("pruebaninjakey");
	$ids = $_POST['ids'];
	*******************************************/

	$i = 0;
	foreach($ids as $id){
		
		$SQL = "Select * from productos where CodigoProducto='$id'";
		
		$result = mysql_query($SQL);

		while($fila = mysql_fetch_array($result,MYSQL_ASSOC)){
	
			$datos[$i]=array('CodigoProducto'=>$fila["CodigoProducto"],'Nombre'=>$fila["Nombre"],'Categoria'=>$fila["Categoria"],'Descripcion'=>$fila["Descripcion"],'CantidadEnStock'=>$fila["CantidadEnStock"],'PrecioVenta'=>$fila["PrecioVenta"],'UrlImagen'=>$fila["UrlImagen"]);
			$i++;
	}
	
	}

	header('Content-type: application/json');

	echo json_encode($datos);

?>