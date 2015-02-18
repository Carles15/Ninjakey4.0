var entrar_login = function () {
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
};
