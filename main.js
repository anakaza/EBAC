$(document).ready(function(){

    /*Máscaras para o formulário.*/
    $('#telefone').mask('(00) 00000-0000'),
    $('#cpf').mask('000.000.000-00'),
    $('#cep').mask('00000-000'),
    $('#numero').mask('000000');

    /*Validação com jquery*/

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf:{
                required: true
            },
            cep:{
                required: true
            },
            endereco:{
                required: true
            },
            numero:{
                required:true
            }            
        },
        /*Mensagens de erro para o usuário.*/
        messages: {
            nome:'<span class="error-message">Por favor, insira o seu nome completo.</span>', /*<span class="error-message" utilizado para criar um estilo diferênciado para o aviso.>*/
            email:'<span class="error-message">Por favor, insira seu e-mail.</span>',       
            telefone:'<span class="error-message">Por favor, insira seu telefone para contato.</span>',
            cpf:'<span class="error-message">Por favor, insira o cpf.</span>',
            cep:'<span class="error-message">Por favor, insira o cep.</span>',
            endereco:'<span class="error-message">Por favor, insira o endereço.</span>',
            numero:'<span class="error-message">Por favor, insira o número do endereço.</span>',
        }
    })

})