const paragrafos  = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

// ps.forEach(function(item) {item.style.backgroundColor = backgroundColorBody; item.style.color = 'white'});

for (p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}