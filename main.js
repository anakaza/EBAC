const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido=false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length>=2;
}

form.addEventListener('submit',function(e){

    e.preventDefault();

    const numeroContaBeneficiaior = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemDescricao = document.getElementById('descricao');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta de número: <b>${numeroContaBeneficiaior.value}</b>`;
    

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido){

        const containerMensagemSucesso= document.querySelector('.success-message');

        containerMensagemSucesso.innerHTML=mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value='';
        numeroContaBeneficiaior.value='';
        valorDeposito.value='';
        mensagemDescricao.value='';


    } else {
        nomeBeneficiario.style.border = '0.1em solid red'
        document.querySelector('.error-message').style.display="block"
    }
    
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if(!formEValido) {
        nomeBeneficiario.classList.add('input-error')
        document.querySelector('.error-message').style.display="block"
    } else{
        nomeBeneficiario.classList.remove('input-error')
        document.querySelector('.error-message').style.display="none"
    }
    
})