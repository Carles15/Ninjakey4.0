var comprobarSesion = function() {
    $.ajax({
        dataType: 'json',
        type: 'POST',
        url: 'PHP/login/comprobarSession.php',
        success: function(sesion) {
            if (sesion.id == 0) {
                $('#jqgrid_button').css("display", "none");
                $('#logout_button').css("display", "none");
                $('#login_button').css("display", "auto");
                $('#registro_button').css("display", "auto");
            } else {
                $('#jqgrid_button').css("display", "auto");
                $('#login_button').css("display", "none");
                $('#registro_button').css("display", "none");
                $('#logout_button').css("display", "auto");
            }
            $('#usuario').append('BIENVENID@ ' + sesion.name);
        }
    });
};