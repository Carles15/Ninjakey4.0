<?php
include './dataSource.php';
$db = mysql_connect($servername, $username, $password);
mysql_select_db($dbase_name);
/* * ***************LOCAL******************** 
$db = mysql_connect("localhost", "root", "");
mysql_select_db("ninjakey");
/* * ***************************************** */

/* * **************OPENSHIFT******************
  $db = mysql_connect($_ENV['OPENSHIFT_MYSQL_DB_HOST'],"admin7fxwY4n","fu1E2pvnLhlM");
  mysql_select_db("pruebaninjakey");
 * ***************************************** */

$SQL = "Select * from categorias";

$result = mysql_query($SQL);

$i = 0;

while ($fila = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $myArray[] = $fila;
    /*
      $datos[$i]=array('Categoria'=>$fila["Categoria"],'DescripcionTexto'=>$fila["DescripcionTexto"],'DescripcionHTML'=>$fila["DescripcionHTML"]);
      $i++;
     */
}

header('Content-type: application/json');
echo json_encode($myArray);
//echo json_encode($datos);
?>
