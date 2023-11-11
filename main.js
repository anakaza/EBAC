const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"/>';

let linhas=''; /*String vazia, deve ser colocada num escopo global para que o seu conteudo seja preservado*/


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade =  document.getElementById('nota-atividade');

    /*Preenchendo linhas com os inputs*/
    let linha = '<tr>'; /*inicia linha*/
    linha += `<td>${inputNomeAtividade.value}</td>`; /*Coluna 01*/
    linha += `<td>${inputNotaAtividade.value}</td>`; /*Coluna 02*/
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado} </td>`; /*Coluna 03. ? seria o if e os : são o else.*/
    linha += `</tr>`; /*finaliza linha*/

    linhas += linha; /*recebe linha*/

    /*Colocando o conteudo dentro do corpo da tabela*/
    const corpoTabela= document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value='';
    inputNotaAtividade.value='';


});