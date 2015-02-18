var login_button = function () {
    ('#login_button').click(function () {
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
    });
};
