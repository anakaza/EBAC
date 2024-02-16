const form = document.getElementById('form-contatos'); /*Resgata formulário*/
const contato=[]; /*Array*/
const numero=[]; /*Array*/

let linhas ='';

form.addEventListener('submit', function(e){
    e.preventDefault(); /*Previne o comportamento padrão do botão*/
    adicionaLinha(); /*Chama função*/
    atualizaTabela(); /*chama função*/
})

/*Função para criar linhas e inserir os dados do formulário.*/
function adicionaLinha(){
    const inputnomeContato = document.getElementById('nome-contato'); /*Variavel(constante) que recebe o valor do nome do contato*/
    const inputnumeroContato = document.getElementById('numero-contato'); /* variavel (constante) que recebe o valor do número do contato*/

    /* Condição "IF" para validar se o número ou nome já foram adicionados anteriormente.*/
    /* || = "ou" */

    if (contato[inputnomeContato.value] || numero.includes(parseFloat(inputnumeroContato.value))) {
        alert(`Este contato ou número já foi salvo anteriormente.`);
        /*O parse float converte o número de string para número de ponto flutuante, sei que não é o ideal, mas foi a única maneira, com o que
        aprendemos até o momento, em que pude fazer a comparação tanto do campo contato quanto do campo número com uma condição simples.*/

    } else{

        contato[inputnomeContato.value]=(inputnumeroContato.value); 
        numero.push(parseFloat(inputnumeroContato.value));

        let linha ='<tr>';
        linha += `<td>${inputnomeContato.value}</td>`
        linha += `<td>${inputnumeroContato.value}</td>`
        linha += '</tr>';

        linhas += linha;
    }

    inputnomeContato.value='';
    inputnumeroContato.value='';
}

function atualizaTabela(){ 
    const corpoTabela=document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;
}