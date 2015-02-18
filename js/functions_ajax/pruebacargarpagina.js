var cargar_pagina = function() {
    $.ajax({
        dataType: 'json',
        url: 'PHP/articulosDOM.php',
        success: function(datos) {
            $.each(datos, function(index) {
                $('#top').append('<div id="j' + datos[index].CodigoProducto + '" class="portada"><img id="i' + datos[index].CodigoProducto + '" class="imagen" src="images/' + datos[index].UrlImagen + '.jpg" draggable="true" ondragstart="drag(this, event)"/><a id="buy' + datos[index].CodigoProducto + '" class="buy">Comprar</a></div>');
                $('#buy' + datos[index].CodigoProducto).click(function() {
                    var $idProducto = datos[index].CodigoProducto;
                    $.ajax({
                        dataType: 'json',
                        type: 'POST',
                        url: 'PHP/carrito/productoAddCarrito.php',
                        data: {idProducto: $idProducto},
                        success: function(producto) {
                            alert(producto.Nombre + " fue añadido al carrito");
                        }
                    });
                });
            });
        }
    });
}