$(document).ready(function () {
    
    // $('h1').html('Etiqueta h1');
    // $('.display-4').html('desde clase');
    // $('#h4').html('Estamos melos');
    // $('.container h1:first').html('cambio de texto');
    // $('.container h1:last').addClass('display-4');
    // $('h1:first').html('Estamos melos');
    // $('.container h1:last').addClass('text-center mt-5');
    // $('.container h1:last').removeClass('display-4');
    $('#text').html('Iván Andrés').addClass('text-center font-weight-bold mt-3');
    $('#button').html('Append text').addClass('btn btn-dark')
    $('#remove').html('Remove').addClass('btn btn-dark')
    $('#button').click(function(){
        $('#text').append(' Nieves Ardila se aman');
        $('#text').prepend('Verónica Álvarez Muñoz e ');
        $('#text').css('color', 'white');$('#text').css('background-color', 'rgb(21, 32, 43)');
        $('#text').css({'background-color': 'rgb(21, 32, 43)', 'color': 'white'});
    });
    $('#remove').click(function () { 
        $('#text').empty();
        $('#text').html('Insert the new text now');
        $('#text').toggleClass('display-4');
    });
});