const form = document.getElementById('form-lista-telefonica');
const contatos=[];
const numeros=[];

let linhas='';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputnomeContato = document.getElementById('nome-contato');
    const inputnumeroContato =  document.getElementById('numero-contato');

    if (contatos[inputnomeContato.value] || numeros.includes(parseFloat(inputnumeroContato.value))){
        alert(`Este contanto ou número já foi salvo anteriormente.`);
    } else{

        contatos[inputnomeContato.value] = (inputnomeContato.value);
        numeros.push(parseFloat(inputnumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputnomeContato.value}</td>`
        linha += `<td>${inputnumeroContato.value}</td>`
        linha += `</tr>`
    
    linhas += linha;

    }

    inputnomeContato.value='';
    inputnumeroContato.value='';
}

function atualizaTabela(){
    const corpoTabela=document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;
}