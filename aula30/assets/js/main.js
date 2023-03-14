function preencheDataAtual() {
    const h1DtAtual = document.querySelector('.container h1');

    const dtAtual = new Date();
    const dia = preencheZeroEsquerda(dtAtual.getDate());
    const mes = mesLiteral(dtAtual.getMonth());
    const hora = preencheZeroEsquerda(dtAtual.getHours());
    const minuto = preencheZeroEsquerda(dtAtual.getMinutes());
    const segundo = preencheZeroEsquerda(dtAtual.getSeconds());
    
    // h1DtAtual.innerHTML = `${diaSemanaLiteral(dtAtual.getDay())}, ${dia} de ${mes} de ${dtAtual.getFullYear()} ${hora}:${minuto}:${segundo}`;

    h1DtAtual.innerHTML = dtAtual.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
}

function preencheZeroEsquerda (valor) {
    return valor.toString().padStart(2, '0');
}

function diaSemanaLiteral(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasSemana[diaSemana];
}

function mesLiteral(mes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']; 
    return meses[mes];
}

preencheDataAtual();