// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre !== '') {
        amigos.push(nombre);
        actualizarListaAmigos();
        input.value = '';
    } else {
        alert('Por favor, ingrese un nombre.');
    }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos para realizar el sorteo.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Crear una copia del array de amigos para el sorteo
    let amigosSorteo = [...amigos];
    let sorteados = [];

    amigos.forEach((amigo) => {
        let indice;
        do {
            indice = Math.floor(Math.random() * amigosSorteo.length);
        } while (amigosSorteo[indice] === amigo);

        sorteados.push({ amigo, amigoSecreto: amigosSorteo[indice] });
        amigosSorteo.splice(indice, 1);
    });

    sorteados.forEach((par) => {
        const li = document.createElement('li');
        li.textContent = `${par.amigo} tiene como amigo secreto a ${par.amigoSecreto}`;
        resultado.appendChild(li);
    });
}

// Event listeners para mejorar la interacción del usuario
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

document.querySelector('.button-add').addEventListener('click', agregarAmigo);
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
}