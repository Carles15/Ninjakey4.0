$(document).ready(function() {
    login();
    comprobarSesion();    
    registro();   
    cargar_pagina();
    categorias();
    carrito();
    logout();
    $('.home').click(function() {
        window.location.replace("index.html");
    });
    $('#jqgrid_button').click(function() {
        window.location.replace("jqGrid/crudPedidos.html");
    });

});
