const form = document.getElementById('form');
const campoB = document.getElementById('campo-B');
const campoA = document.getElementById('campo-A');
const acerto = document.getElementById('sucesso');
const error = document.getElementById('erro');

function comparaAeB(campoB, campoA){
    return campoB >= campoA;
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    let validForm = comparaAeB (campoB.valueAsNumber, campoA.valueAsNumber)

    if(validForm){
        acerto.style.display = 'block';
        campoA.value='';
        campoB.value='';
    }
})

campoA.addEventListener('keyup', function(e){
    let validForm = comparaAeB (campoB.valueAsNumber, campoA.valueAsNumber)

    if(!validForm){
        error.style.display ='block';
    } else{
        error.style.display ='none'
    }

})