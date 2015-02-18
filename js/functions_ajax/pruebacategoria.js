var categorias = function () {
    $('.categorias').click(function () {
        $.ajax({
            dataType: 'json',
            url: 'PHP/categoriasDOM.php',
            success: function (datos) {
                $('#top').html('');
                $.each(datos, function (index) {
                    $('#top').append('<div id="i' + datos[index].Categoria + '" class="categoria-design" name="' + datos[index].Categoria + '"><img id="img' + datos[index].Categoria + '" class="imagen" src="images/' + datos[index].Categoria + '2.png"/></div>');
                    $('#i' + datos[index].Categoria).click(function () {
                        var $buscar = $('#i' + datos[index].Categoria).attr('name');
                        $.ajax({
                            dataType: 'json',
                            type: 'POST',
                            url: 'PHP/seleccionCategoriaDOM.php',
                            data: {name: $buscar},
                            success: function (datos) {
                                $('#top').html('');
                                $.each(datos, function (index) {
                                    $('#top').append('<div id="j' + datos[index].CodigoProducto + '" class="portada"><img id="i' + datos[index].CodigoProducto + '" class="imagen" src="images/' + datos[index].UrlImagen + '.jpg" draggable="true" ondragstart="drag(this, event)"/><a id="buy' + datos[index].CodigoProducto + '" class="buy">Comprar</a></div>');
                                    $('#buy' + datos[index].CodigoProducto).click(function () {
                                        productos_carrito.push(datos[index].CodigoProducto);
                                    });
                                });
                            }
                        });
                    });
                    $('#i' + datos[index].Categoria).hover(function () {
                        $('#img' + datos[index].Categoria).attr('src', 'images/' + datos[index].Categoria + '.png');
                    }, function () {
                        $('#img' + datos[index].Categoria).attr('src', 'images/' + datos[index].Categoria + '2.png');
                    });
                });
            }
        });
    });
};
