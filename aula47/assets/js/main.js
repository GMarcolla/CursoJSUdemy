function relogio() {
    const relogio = document.querySelector('.relogio');
    let iniciarContador;
    let hora = 0;
    let minuto = 0;
    let segundo = 1;

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('zerar')) {
            zerarCronometro();
        }

        if (el.classList.contains('iniciar')) {
            iniciarCronometro();
        }

        if (el.classList.contains('pausar')) {
            pausarCronometro();
        }
    });

    function iniciarCronometro() {
        clearInterval(iniciarContador);
        iniciarContador = setInterval(() => {
            relogio.innerHTML = retornarTimerFormatado(segundo);
            segundo++;
        }, 1000);
    }

    function pausarCronometro() {
        clearInterval(iniciarContador);
        relogio.style.color = 'red';
    }

    function zerarCronometro() {
        clearInterval(iniciarContador);
        relogio.style.color = 'black';
        hora = 0;
        minuto = 0;
        segundo = 1;

        relogio.innerHTML = '00:00:00';
    }

    function retornarTimerFormatado(segundoAtual) {
        if (segundoAtual === 60) {
            minuto++;
            segundo = 0;
        }
        if (minuto === 60) {
            hora++;
            segundo = 0;
            minuto = 0;
        }
        return `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}`
    }
}

relogio();


