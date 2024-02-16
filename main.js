$(document).ready(function(){

    /*função carrossel slick*/
    $('#carrossel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    /*Função exibir ou esconder o menu (nav) do menu hamburguer(spans) */
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    /*Máscaras para o formulário. S = letras 0 = números*/
    $('#telefone').mask('(00) 0 0000-0000')

    /*Validação com jquery. Lembre-se que o Plugin utiliza a propriedade name="nome do input" */
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: { /*Mensagens de erro para o usuário.*/
            nome: 'Por favor, insira seu nome.',
            telefone: 'Por favor, insira seu telefone celular.',
            email: 'Por favor, insira o seu e-mail para contato.',
            mensagem: 'Por favor, insira a sua mensagem.'
        }

        /*Disparar alerta - Interceptar o envio e do formulário invalido 

        submitHandler: function(form){
            console.log(form)
        },
        

        invalidHandler: function(evento, validador){                            
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        } */
        
    }) /*Fim do $('form').validate({}) */

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        /*Pega o elemento pai (parent) dentro deste elemento (lista veiculos) procura o texto dentro do elemento h3*/
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);   /*o 'Val' serve para recuperar ou definir 'setar' o valor*/

        /*Animação e efeito de rolar a página na tag html*/
        $('html').animate({
            scrollTop: destino.offset().top  /*offset retorna a posição do elemento para sabermos o quão distante ela está do 'topo'.*/
        }, 1000) /*Duração do efeito em ms*/
    })


})