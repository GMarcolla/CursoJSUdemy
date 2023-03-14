const elementos = [
    {tag: 'p', texto:'Frase 1'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'footer', texto:'Frase 3'},
    {tag: 'section', texto:'Frase 4'},
];
const container = document.querySelector('.container'); 
const div = document.createElement('div');

function criarObjeto (objeto) 
{
    const {tag, texto} = objeto;
    const elemento = document.createElement(tag);
    elemento.innerText = texto;
    div.appendChild(elemento);
}

function processarListaObjetos () 
{
    for (let index = 0; index < elementos.length; index++) {
        criarObjeto(elementos[index]);
    }

    container.appendChild(div);
}

processarListaObjetos();