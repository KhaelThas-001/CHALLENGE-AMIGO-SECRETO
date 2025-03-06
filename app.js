// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Boton agregar amigo
function  agregarAmigo() {
    let listaDeAmigos = document.getElementById('amigo').value.trim(); // Eliminar espacios en blanco al incio y al final
    
    // Validar que el input contenga solo texto
    if (/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(listaDeAmigos)) {
    amigos.push(listaDeAmigos);
    actualizarLista();
    limpiarInput();
    } else {
        alert("Por favor, ingresa solo texto válido (sin números ni caracteres especiales).")
    }
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join(""); // Muestra correctamente la lista
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}

//Boton sortear amigo
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un indice aleatoria entre 0 y el tamaño del array -1
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);

    //Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la página
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: <strog>${amigoSorteado}</strog>`;
}

function condicionesIniciales(){
    agregarAmigo ();
}

function reiniciar() {
    //Vaciar el array de amigos
    amigos = [];

    //Limpiar la lista mostrada 
    document.getElementById('listaAmigos').innerHTML = '';

    //Limpiar el resultado del sorteo
    document.getElementById('resultado').innerHTML = '';

    //Limpiar el input
    limpiarInput();
}