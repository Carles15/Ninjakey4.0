var go_registro = function() {
    $('#ir_al_registro').click(function() {

        $('#login').hide();
        $('#top').html('');
        var idiv = document.createElement('div');
        idiv.id = 'registro';
        var top = document.getElementById('top').appendChild(idiv);
        idiv.innerHTML = datos2;
        $('#registro').hide();
        $("#registro").slideDown();
    });
}