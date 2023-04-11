function verficarMaior (num1, num2) {
    num1 === num2 ? console.log('Números iguais') : num1 > num2 ?  console.log(`${num1} é maior que ${num2}`) : console.log(`${num2} é maior que ${num1}`);
}

verficarMaior(11, 12);