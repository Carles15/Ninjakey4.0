  var logout=function(){
    $('#logout_button').click(function() {
        $.ajax({
            dataType: 'json',
            type: 'POST',
            url: 'PHP/login/logout.php',
            success: function(sesion) {
                if (sesion.id == 0) {
                    $('#jqgrid_button').hide();
                    $('#logout_button').hide();
                    $('#login_button').show();
                    $('#registro_button').show();
                    $('#usuario').html("BIENVENID@ " + sesion.name);
                    alert("La sesion fue destruida por BATMAN");
                } else {
                    alert("Batman intervino y no conseguiste deslogear");
                }
            }
        });
    });
   
  };
 