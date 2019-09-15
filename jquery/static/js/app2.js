$(document).ready(function () {
    // //Declarar variables reutilizables
    // var input = $("#nombre");
    // var contenido = $("#contenido");

    // input.keyup(function(){
    //     console.log(input.val());
    //     contenido.html(input.val());

    //     if (input.val()=='') {
    //         contenido.html('Escriba papi');
    //     }
    // })
    // $('#formu').submit(function(evento){
    //     evento.preventDefault();
    //     var nombre = $('#name')
    //     console.log(nombre.val());
    //     console.log('click');
    // });
    $('#ocultar').click(function(){
        $('#elemento').hide(1000);
    });
    $('#mostrar').click(function(){
        $('#elemento').show(1000);
    });
    $('#toggle').click(function(){
        $('#elemento').toggle(1000);
    });
});