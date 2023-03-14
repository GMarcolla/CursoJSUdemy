const nome = 'Gustavo Felipe';
const sobrenome = 'Marcolla';
const idade = 22;
const peso = 74;
const altura = 1.8;

let imc = peso / (altura * altura);
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

