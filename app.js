// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function  agregarAmigo() {
    let listaDeAmigos = document.getElementById('amigo').value;
    amigos.push(listaDeAmigos);
    console.log(amigos);
    document.getElementById('listaAmigos').innerHTML += `<li>${amigos.pop()}</li>`
}
function limpiarInput() {

}


