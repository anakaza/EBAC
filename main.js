/* Antes de qualquer coisa, sigo com tudo que já nos foi ensinado até o momento, com outra lógica.*/

$(document).ready(function(){
        var formVisivel = false;

    $('#btn-fixo').click(function() {
        if(!formVisivel){
            $('form').slideDown(); 
            formVisivel = true;
            $(this).addClass('active');         /* Troquei o  "$('button header').add..." por this facilitando a aplicação o código.*/
            $('#add-img').hide();
            $('#rmv-img').show();

            /*Ao ativar o botão "+" traz a página para o topo do formulário melhorando a interação do usuário*/
            /*Código de pesquisa. Serve para rolar a página para acompanhar as ações do botão */
            $('html, body').animate({ 
                scrollTop: $('form').offset().top
            }, 'slow');

        } else{
            $('form').slideUp();
            formVisivel = false;
            $(this).removeClass('active');       /* Troquei o  "$('button header').add..." por this facilitando a aplicação do código.*/
            $('#add-img').show();
            $('#rmv-img').hide(); 

            //fica a seus critério permitir arrastar a página após fechar o formulário

            /* 
            $('html, body').animate({ 
                scrollTop: $('form').offset().top
            }, 'slow');
            */

        }
});

    
    $('form').on('submit', function(e){
        e.preventDefault();

        const enderecoDaNovaImagem = $('#endereco-image-nova').val(); //Add url elemento dinamico
        
        /*Criação de um novo item para a lista*/
        const novoItem =$('<li></li>');

        /*Adiciona a imagem resgatada (const enderecoDaNovaImagem) e define o elemento de destino (const novoItem)*/
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem); 
        
        /*Adiciona o overlay com o link para a imagem adicionada*/
        $(`
            <div class="overlay-image-link">
                <a href = "${enderecoDaNovaImagem}" target="_blank" title="Abrir">
                    Abrir
                </a>
            </div>
        `).appendTo(novoItem);

        
        $(novoItem).appendTo('ul'); /*Adicionando o novo item na ul do html*/
        $('#endereco-image-nova').val(""); /*limpa o campo da url*/

        /*rola para baixo, após a adição, para que o usuário acompanhe a adição de imagens*/
        $('html, body').animate({ 
            scrollTop: $('form').offset().top
        }, 'slow');

    })


})