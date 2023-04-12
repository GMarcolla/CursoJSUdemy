const verificarFizzBuzz = (numero) => { 
    let resultado = ''; 

    if (typeof numero !== 'number') return numero

    if (!(Number(numero) % 3)) resultado = 'Fizz'    
    if (!(Number(numero) % 5)) resultado += 'Buzz' 

    return resultado.length > 0 ? resultado : numero;
}


for (let index = 0; index <= 100; index++) {
    console.log(index, verificarFizzBuzz(index));
}
