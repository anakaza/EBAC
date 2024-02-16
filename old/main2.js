const form = document.getElementById('form');
const campoB = document.getElementById('campo-b');
const campoA = document.getElementById('campo-a');
const acerto = document.getElementById('sucesso')
const error = document.getElementById('erro')

function comparandoAeB(campoB, campoA){
    return campoB >= campoA;
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    let validaForm = comparandoAeB(campoB.valueAsNumber, campoA.valueAsNumber)

    if(validaForm){
        acerto.style.display = 'block';
        campoB.value='';
        campoA.value='';
    }
})

campoA.addEventListener('keyup', function(e){
    let validaForm = comparandoAeB(campoB.valueAsNumber, campoA.valueAsNumber)
    
    if(!validaForm){
        error.style.display = 'block';
    } else{
        error.style.display='none';
    }

})