$(document).ready(function() {                                                 /*Está função aguarda que o DOM esteja completamente coarregado antes de executar,  garantindo que o js só seja executado após o html ter carregado corretamente.*/
    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();                            /*Obtem o valor do #ID e armazena na variável.*/
        $('#nova-tarefa').val('');                                             /*limpa o campo do input após a função*/

        const novoItem = $('<li></li>').text(novaTarefa);                      /*Cria um novo elemento <li> e adiciona o texto armazenaod na variável 'novaTarefa'*/
        novoItem.addClass('fazer');                                            /*Adiciona a classe 'fazer' ao 'novoItem' por padrão. A classe 'fazer' é uma adição visual ao elemento.*/

        novoItem.on('click', function(){                                       /*Função que aplica a classe 'Concluido' ao 'novoItem'.*/
            $(this).toggleClass('concluido');
        });

        novoItem.on('click', function(){                                       /*Função que aplica a classe 'fazer' ao 'novoItem'.*/
            $(this).toggleClass('fazer');
        });

        $(novoItem).appendTo('ul');                                            /*Função que anexa esse novo <li> na <ul>.*/

    });

    $('form').on('reset', function(e){                                        
        e.preventDefault();

        $('#lista-tarefa li:last-child').remove();                            /*Função que remova o ultímo filho (ultimo <li>) adicionado ao <ul> (#lista-tarefa)*/
    });                                                                       /*#lista-tarefa (UL chamada por #ID) li:last-child (elemento li e indicativo do ultimo filho.*/
});
