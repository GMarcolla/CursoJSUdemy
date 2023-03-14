const container = document.querySelector('.container');
const formulario = document.querySelector('#formulario');
let ocorreuErro = true;

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputPeso = formulario.querySelector('#peso');
    const inputAltura = formulario.querySelector('#altura');
    const altura = Number(inputAltura.value);
    const peso  = Number(inputPeso.value);
    ocorreuErro = true;
   
    let retorno = verificaPreenchimento(altura, peso);

    if (!retorno) {
        const imc = calcularIMC(altura, peso);
        const classeIMC = definirClasseIMC(imc);

        retorno = `Seu IMC é ${imc.toFixed(2)} (${classeIMC})`;
    }

    preencheResultado(retorno);
});

function calcularIMC(altura, peso) {
    return peso / (altura ** 2);
}

function verificaPreenchimento(altura, peso) {
    if (!peso)
        return 'Peso inválido';
    if (!altura)
        return 'Altura inválida';
    ocorreuErro = false;
}

function definirClasseIMC(imc) {
    if (imc < 18.5)
        return 'Abaixo do peso';
    if (imc < 24.9)
        return 'Peso normal';
    if (imc < 29.9)
        return 'Sobrepeso';
    if (imc < 34.9)
        return 'Obesidade grau 1';
    if (imc < 39.9)
        return 'Obesidade grau 2';
    if (imc >= 40)
        return 'Obesidade grau 3';
}

function preencheResultado(resultado) {
    const dvResultado = container.querySelector('#resultado');
    dvResultado.innerHTML = '';
    
    const paragrafo = criarParagrafo();
    paragrafo.innerHTML = resultado;
    
    if(ocorreuErro)
        paragrafo.classList.add('resultadoErr');
    else
        paragrafo.classList.add('resultadoOK');

    dvResultado.appendChild(paragrafo);
}

function criarParagrafo () {
    const p = document.createElement('p');
    return p;
}

