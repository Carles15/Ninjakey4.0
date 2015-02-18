var login = function () {

    $('#login_button').click(function () {
        $('#top').html('');
        var idiv = document.createElement('div');
        idiv.id = 'login';
        var datos = "   <h1>LOGIN</h1>\n\
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
};









        
