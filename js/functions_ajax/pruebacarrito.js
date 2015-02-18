
var carrito = function () {
    $('#carrito_button').click(function () {
        $.ajax({
            dataType: 'json',
            type: 'POST',
            url: 'PHP/login/comprobarSession.php',
            success: function (sesion) {
                if (sesion.carrito.length == 0) {
                    alert("No existe ningun producto en el carrito");
                } else {
                    var array_carrito = {};
                    for (i = 0; i < sesion.carrito.length; i++) {
                        if (array_carrito[sesion.carrito[i].CodigoProducto] != null) {
                            array_carrito[sesion.carrito[i].CodigoProducto]++;
                        } else {
                            array_carrito[sesion.carrito[i].CodigoProducto] = 1;
                        }
                    }
// Lista de IDs --> alert(Object.keys(array_carrito));

                    $ids = Object.keys(array_carrito);
                    $.ajax({
                        dataType: 'json',
                        type: 'POST',
                        url: 'PHP/carrito/carritoDOM.php',
                        data: {ids: $ids},
                        success: function (datos) {
                            var enviar_carrito = new Array();
                            $('#top').html('');
                            $('#top').append('<h1 id="carritotitle">CARRITO</h1>');
                            $('#top').append('<button id="enviar_carrito">Enviar Carrito</button>');
                            var i = 1;
                            $.each(datos, function (index) {
                                if (i % 2 == 0) {
                                    $('#top').append('<div style="background-color:#ececec" id="j' + datos[index].CodigoProducto + '" class="portada carritodetail"><img style="float:left;" id="i' + datos[index].CodigoProducto + '" class="imagen carritoimagen" src="images/' + datos[index].UrlImagen + '.jpg" /><div style="height:274px;"><h3>Nombre: ' + datos[index].Nombre + '</h3><h3>Categoria: ' + datos[index].Categoria + '</h3><h4>Descripcion: ' + datos[index].Descripcion + '</h4><h3>Precio unidad: ' + datos[index].PrecioVenta + '</h3><h3>Cantidad: ' + array_carrito[datos[index].CodigoProducto] + '</h3><button id="elimina' + datos[index].CodigoProducto + '"style="float:right"><img src="images/iconos/eliminar.png"></div></div>');
                                } else {
                                    $('#top').append('<div id="j' + datos[index].CodigoProducto + '" class="portada carritodetail"><img style="float:left;" id="i' + datos[index].CodigoProducto + '" class="imagen carritoimagen" src="images/' + datos[index].UrlImagen + '.jpg" /><div style="height:274px;"><h3>Nombre: ' + datos[index].Nombre + '</h3><h3>Categoria: ' + datos[index].Categoria + '</h3><h4>Descripcion: ' + datos[index].Descripcion + '</h4><h3>Precio unidad: ' + datos[index].PrecioVenta + '</h3><h3>Cantidad: ' + array_carrito[datos[index].CodigoProducto] + '</h3><button id="elimina' + datos[index].CodigoProducto + '"style="float:right"><img src="images/iconos/eliminar.png"></div></div>');
                                }

                                var juego = new Object();
                                juego.CodigoProducto = datos[index].CodigoProducto;
                                juego.Cantidad = array_carrito[datos[index].CodigoProducto];
                                juego.PrecioUnidad = datos[index].PrecioVenta;
                                enviar_carrito.push(juego);
                                i++;
                                $('#elimina' + datos[index].CodigoProducto).click(function () {
                                    $idProducto = datos[index].CodigoProducto;
                                    $.ajax({
                                        type: 'POST',
                                        url: 'PHP/carrito/productoRemoveCarrito.php',
                                        data: {idProducto: $idProducto}
                                    });
                                    for (i = sesion.carrito.length; i >= 0; i--) {
                                        if (sesion.carrito[i] == datos[index].CodigoProducto) {
                                            sesion.carrito.splice(i, 1);
                                            enviar_carrito.splice(i, 1);
                                        }
                                    }

                                    $(this).parent().parent().remove();
                                });
                            });
                            $('#enviar_carrito').click(function () {
                                var carritoJson = JSON.stringify(enviar_carrito);
                                $.ajax({
                                    dataType: 'json',
                                    type: 'POST',
                                    url: 'PHP/login/comprobarSession.php',
                                    success: function (sesion) {
                                        if (sesion.id == 0) {
                                            $('#top').html('');
                                            var idiv = document.createElement('div');
                                            idiv.id = 'login';
                                            var datos = "   <h1>DEBES ESTAR LOGEADO PARA PODER COMPRAR PRODUCTOS</h1>\n\
                                                <form id='logeo' method='POST'>\n\
                                                <p>Email: <input type='text' name='email'></p>\n\
                                                <p>Contraseña: <input type='password' name='password'></p>\n\
                                                <p><button id='entrar_button' class='button_form'> ENTRAR</button></p>\n\
                                                </form>\n\
                                                <hr>\n\
                                                <p>¿Aún no eres usuario? <button class='button_form' id='ir_al_registro'>Registrarse</button></p>";
                                            document.getElementById('top').appendChild(idiv);
                                            idiv.innerHTML = datos;
                                            $('#login').hide();
                                            $("#login").slideDown();

                                            $('#entrar_button').click(function () {
                                                var loginfo = $("#logeo").serialize();
                                                $.ajax({
                                                    dataType: 'json',
                                                    type: 'POST',
                                                    url: 'PHP/login/login.php',
                                                    data: loginfo,
                                                    success: function (datos) {
                                                        setTimeout(function () {
                                                        }, 5000);
                                                        $.each(datos, function (index) {
                                                            $('#jqgrid_button').css("display", "auto");
                                                            $('#login_button').css("display", "none");
                                                            $('#registro_button').css("display", "none");
                                                            $('#logout_button').css("display", "auto");
                                                            $('#usuario').append('BIENVENID@ ' + datos[index].NombreCliente);

                                                        });
                                                    }
                                                });
                                            });

                                            $('#ir_al_registro').click(function () {

                                                $('#login').hide();

                                                $('#top').html('');
                                                var idiv = document.createElement('div');
                                                idiv.id = 'registro';
                                                var top = document.getElementById('top').appendChild(idiv);
                                                idiv.innerHTML = datos2;
                                                $('#registro').hide();
                                                $("#registro").slideDown();
                                            });
                                        } else {
                                            $.ajax({
                                                dataType:'json',
                                                type: 'POST',
                                                url: 'PHP/carrito/insertCarrito.php',
                                                data: {carritoJson: carritoJson},
                                                success: function (datos) {
                                                    
                                                    
                                                        alert(datos.id);
                                                       location.href="http:pruebatramerbank-dawcarles.rhcloud.com/pasarela/pasarelatramerbank.html#/pasarelapago/787878/"+datos.id+"/"+datos.precio_total+"/NinjakeyOrderTransaction"; 
                                       
                                                    
                                                }
                                            });

                                        }

                                    }
                                });

                            });
                        }
                    });

                }

            }
        });
    });
};

