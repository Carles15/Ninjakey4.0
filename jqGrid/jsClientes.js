    $(document).ready(function() {

                $("#jqGrid").jqGrid({
                    url: 'PHP/clientesDOM.php',
                    datatype: "json",
                    colNames: ['CodigoCliente', 'NombreCliente', 'Telefono', 'LineaDireccion1', 'Ciudad', 'Region', 'Pais', 'CodigoPostal', 'Password', 'Email'],
                    colModel: [
                        {name: 'CodigoCliente', index: 'id', width: 55},
                        {name: 'NombreCliente', index: 'name', width: 90},
                        {name: 'Telefono', index: 'name asc, invdate', width: 100},
                        {name: 'LineaDireccion1', index: 'name', width: 80, align: "right"},
                        {name: 'Ciudad', index: 'tax', width: 80, align: "right"},
                        {name: 'Region', index: 'tax', width: 80, align: "right"},
                        {name: 'Pais', index: 'name', width: 150, sortable: false},
                        {name: 'CodigoPostal', index: 'tax', width: 80, align: "right"},
                        {name: 'Password', index: 'tax', width: 80, align: "right"},
                        {name: 'Email', index: 'tax', width: 80, align: "right"}
                    ],
                    rowNum: 10,
                    rowList: [10, 20, 30],
                    pager: '#jqGridPager',
                    sortname: 'CodigoCliente',
                    viewrecords: true,
                    sortorder: "desc",
                    caption: "Clientes"
                });
                $("#jqGrid").jqGrid('navGrid', '#jqGridPager', {edit: false, add: false, del: false});




                $(function() {
                    $("#divBuscar").dialog({
                        modal: true,
                        autoOpen: false,
                        buttons: {
                            "Buscar": function() {
                                var busqueda = $('#formularioBuscar').serialize();
                                if (busqueda != "Codigocliente=") {
                                    $("#jqGrid2").jqGrid({
                                        url: 'PHP/pedidosPorCliente.php?' + busqueda,
                                        datatype: "json",
                                        colNames: ['CodigoPedido', 'FechaPedido', 'Estado', 'Comentarios', 'CodigoCliente'],
                                        colModel: [
                                            {name: 'CodigoPedido', index: 'id', width: 55},
                                            {name: 'FechaPedido', index: 'name', width: 90},
                                            {name: 'Estado', index: 'name asc, invdate', width: 100},
                                            {name: 'Comentarios', index: 'name', width: 80, align: "right"},
                                            {name: 'CodigoCliente', index: 'tax', width: 80, align: "right"}
                                        ],
                                        rowNum: 50,
                                        rowList: [10, 20, 30],
                                        pager: '#jqGridPager',
                                        sortname: 'CodigoPedido',
                                        viewrecords: true,
                                        sortorder: "desc",
                                        caption: "Pedidos"
                                    });
                                } else {
                                    alert("Escribe una Categoria");
                                }


                            },
                            "Cerrar": function() {
                                $(this).dialog("close");
                            }
                        }

                    });
                    $("#buscar").on("click", function() {
                        $("#divBuscar").dialog("open");
                    });
                });




                $("#borrar").click(function() {
                    var id = $("#jqGrid").jqGrid('getGridParam', 'selrow');
                    if (id) {
                        var ret = $("#jqGrid").jqGrid('getRowData', id);
                        var cod1 = ret.CodigoCliente;
                        //alert("Se va a borrar el juego con el código: "+cod1);
                        $.ajax({
                            type: 'POST',
                            url: 'PHP/deleteCliente.php',
                            data: {cod: cod1},
                            success: function(datos) {
                                if (datos == "OK") {
                                    alert("Se ha borrado correctamente");
                                    $("#jqGrid").trigger("reloadGrid", [{page: 1}]);
                                } else {
                                    alert("La operacion no se ha realizado con exito");
                                }
                            }
                        });

                    } else {
                        alert("Selecciona un dato de la tabla");
                    }

                });


                $(function() {
                    $('#divActualizar').dialog({
                        modal: true,
                        autoOpen: false,
                        buttons: {
                            "Actualizar": function() {
                                var updatear = $('#formularioActualizar').serialize();
                                alert(updatear);
                                $.ajax({
                                    type: 'POST',
                                    url: 'PHP/updateCliente.php',
                                    data: updatear,
                                    success: function(datos) {
                                        if (datos == "OK") {
                                            alert("Actualizado satisfactoriamente");
                                            $("#jqGrid").trigger("reloadGrid", [{page: 1}]);
                                        } else {
                                            $('#jqGrid').append(datos);
                                            alert("No actualizado");
                                        }
                                    }
                                });
                            }
                        }

                    });

                    $("#actualizar").on("click", function() {
                        var id = $("#jqGrid").jqGrid('getGridParam', 'selrow');
                        if (id) {
                            var ret = $("#jqGrid").jqGrid('getRowData', id);
                            var cod1 = ret.CodigoCliente;
                        }
                        alert(cod1);
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            url: 'PHP/seleccionCliente.php',
                            data: {cod1: cod1},
                            success: function(datos) {
                                $.each(datos, function(index) {
                                    $('.codigocliente').val(datos[index].CodigoCliente);
                                    $('.nombrecliente').val(datos[index].NombreCliente);
                                    $('.telefono').val(datos[index].Telefono);
                                    $('.direccion').val(datos[index].LineaDireccion1);
                                    $('.ciudad').val(datos[index].Ciudad);
                                    $('.region').val(datos[index].Region);
                                    $('.pais').val(datos[index].Pais);
                                    $('.codigopostal').val(datos[index].CodigoPostal);
                                    $('.password').val(datos[index].Password);
                                    $('.email').val(datos[index].Email);
                                });


                            }

                        });
                        $("#divActualizar").dialog("open");
                    });
                });



                $(function() {
                    $("#divInsertar").dialog({
                        modal: true,
                        autoOpen: false,
                        buttons: {
                            "Guardar": function() {

                                var inserto = $('#formularioInsertar').serialize();
                                //alert(inserto);
                                $.ajax({
                                    type: 'POST',
                                    url: 'PHP/insertCliente.php',
                                    data: inserto,
                                    success: function(datos) {
                                        if (datos == "OK") {
                                            //alert("Los datos se han insertado correctamente");
                                            $("#jqGrid").trigger("reloadGrid", [{page: 1}]);
                                            var inputs = document.getElementById('formularioInsertar').getElementsByTagName("input");
                                            for (var i = 0; i < inputs.length; i++) {
                                                inputs[i].value = "";
                                            }
                                        } else {
                                            alert("La operacion no se ha realizado con exito");
                                        }
                                    }
                                });
                            },
                            "Cerrar": function() {
                                $(this).dialog("close");
                            }
                        }

                    });
                    $("#botonInsertar").on("click", function() {
                        $("#divInsertar").dialog("open");
                    });
                });
            });





