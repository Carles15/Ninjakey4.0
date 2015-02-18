var registro = function() {
    var datos2 = "<form id='nuevo_usuario' action='PHP/registro.php' method='POST'>\n\
                            <p><label>Nombre<br><input type='text' name='nombre' required></input></label></p>\n\
                            <p><label>Telefono<br><input type='text' name='telefono' required></input></label></p>\n\
                            <p><label>Direccion<br><input type=text' name='direccion' required></input></label></p>\n\
                            <p><label>Ciudad<br><input type='text' name='ciudad' required></input></label></p>\n\
                            <p><label>Codigo Postal<br><input type='text' name='cp' required></input></label></p>\n\
                            <p><label>Region<br><input type='text' name='region' required></input></label></p>\n\
                            <p><label>Pais<br><input type='text' name='pais' required></input></label></p>\n\
                            <p><label>Email<br><input type='email' name='email' required></input></label></p>\n\
                            <p><label>Password<br><input type='password' name='password' required></input></label></p>\n\
                            <p><input type='submit' name='Submit' value='Enviar'/></p>\n\
                        </form>\n\
                        ";

    $('#registro_button').click(function() {

        $('#top').html('');
        var idiv = document.createElement('div');
        idiv.id = 'registro';

        var top = document.getElementById('top').appendChild(idiv);
        idiv.innerHTML = datos2;
        $('#registro').hide();
        $("#registro").slideDown();
    });
    
};