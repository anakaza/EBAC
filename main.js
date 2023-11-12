const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>' /*Resgata a classe aprovado e resultado no span que criamos*/
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>' /*Resgata a classe reprovado e resultado no span que criamos*/
const notaMinina = parseFloat(prompt("Digite a nota minima:"));

let linhas=''; /*String vazia, deve ser colocada num escopo global para que o seu conteudo seja preservado*/


form.addEventListener('submit', function(e) {
    e.preventDefault();  /*impede o comportamento padrão do botão submit*/
    adicionaLinha(); /*chama função*/
    atualizaTabela(); /*chama função*/
    atualizaMediaFinal(); /*chama função*/
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade =  document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) /*notifica o usuário que a atividade ja foi inserida anteiriormente e nao permite adiciionar uma linha*/ {
        alert(` A atividade: ${inputNomeAtividade.value} já foi adicionada a lista anteriormente.`);
    } else /*Adiciona linha com as informações inseridas*/ { 
    
    atividades.push(inputNomeAtividade.value);           /*adiciona o nome da atividade ao array "atividades" */
    notas.push(parseFloat(inputNotaAtividade.value));    /*adiciona a nota da atividade ao array "notas" */

    /*Preenchendo linhas com os inputs*/
    let linha = '<tr>'; /*inicia linha*/
    linha += `<td>${inputNomeAtividade.value}</td>`; /*Coluna 01*/
    linha += `<td>${inputNotaAtividade.value}</td>`; /*Coluna 02*/
    linha += `<td>${inputNotaAtividade.value >= notaMinina ? imgAprovado : imgReprovado} </td>`; /*Coluna 03. ? seria o if e os : são o else.*/
    linha += `</tr>`; /*finaliza linha*/

    linhas += linha; /*recebe linha*/
} 

    inputNomeAtividade.value='';    /*limpa formulário*/
    inputNotaAtividade.value='';    /*limpa formulário*/
}

/*Colocando o conteudo dentro do corpo da tabela atualizando seu conteudo*/
function atualizaTabela(){ 
        const corpoTabela= document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
}


function atualizaMediaFinal() {

    const mediaFinal = calculaMediaFinal(); /* recebe o calcula media final */
    document.getElementById('media-final-valor').innerHTML=mediaFinal; /* resgata o id media final valor e atualiza modificando o seu valor com o inner html*/
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >=notaMinina ? spanAprovado : spanReprovado; /*Resgata o resultado da media final e altera o valor com o inner html baseado na condição X >= y ? 1 : 2)*/

}

function calculaMediaFinal(){

    let somaDasNotas =0; /*Soma as notas com for*/ 
    for (let i=0; i < notas.length; i++){
        somaDasNotas += notas[i]; /*Encurtada*/
    }

    return somaDasNotas/notas.length /* Retorna para o calculaMediaFinal as notas somadas e divididades pela quantidade (lenght) de notas*/
}