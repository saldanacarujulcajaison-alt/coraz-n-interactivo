// 1. FUNCIÓN PARA EL BOTÓN SORPRESA
function mostrarSorpresa() {
    // Muestra la carta oculta
    const carta = document.getElementById('cartaSorpresa');
    carta.style.display = 'block';

    // Cambia el color del corazón principal a un neón azul/celeste brillante al hacer clic
    const corazon = document.getElementById('corazonGrande');
    corazon.style.color = '#00f0ff';
    corazon.style.textShadow = '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff';

    // Oculta el botón, el título y el subtítulo para dejar limpia la pantalla
    document.getElementById('btnSorpresa').style.display = 'none';
    document.getElementById('tituloPrincipal').style.display = 'none';
    document.getElementById('subtituloPrincipal').style.display = 'none';
}

// NUEVO: 2. FUNCIÓN PARA EL BOTÓN ATRÁS
function volverAtras() {
    // Oculta la carta con el mensaje
    const carta = document.getElementById('cartaSorpresa');
    carta.style.display = 'none';

    // Regresa el corazón grande a su color rosa neón original
    const corazon = document.getElementById('corazonGrande');
    corazon.style.color = '#ff007f';
    corazon.style.textShadow = '0 0 10px #ff007f, 0 0 20px #ff007f, 0 0 40px #ff007f';

    // Vuelve a mostrar el botón, el título y el subtítulo principal
    document.getElementById('btnSorpresa').style.display = 'inline-block';
    document.getElementById('tituloPrincipal').style.display = 'block';
    document.getElementById('subtituloPrincipal').style.display = 'block';
}

// 3. LÓGICA PARA LA LLUVIA MÁGICA DE CORAZONES
function crearCorazonFugaz() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-caida');
    corazon.innerText = '❤️';

    // Posición horizontal aleatoria para que caigan por todos lados
    corazon.style.left = Math.random() * 100 + 'vw';
    
    // Tamaños variados para dar profundidad (unos más grandes y otros más chiquitos)
    const tamaño = Math.random() * 15 + 10; // entre 10px y 25px
    corazon.style.fontSize = tamaño + 'px';

    // Velocidad de caída aleatoria para que no caigan todos al mismo tiempo
    const duracion = Math.random() * 3 + 2; // entre 2 y 5 segundos
    corazon.style.animationDuration = duracion + 's';

    document.body.appendChild(corazon);

    // Elimina el corazoncito cuando termina de caer para que no sature la memoria
    setTimeout(() => {
        corazon.remove();
    }, duracion * 1000);
}

// Genera un corazoncito nuevo cada 300 milisegundos de forma infinita
setInterval(crearCorazonFugaz, 300);
