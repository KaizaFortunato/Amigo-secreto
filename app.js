//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];
let limiteDeAmigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.getElementById('amigo').value;
  
    if (nomeAmigo === ''){
     alert("Por favor, insira um nome.");
     return;
    }
    listaDeAmigos.push(nomeAmigo);
     document.getElementById('amigo').value = '';
     exibirListaDeAmigo();
 }
 
 function exibirListaDeAmigo(){
   let listaAmigos = document.getElementById('listaAmigos');
     listaAmigos.innerHTML = '';
     listaDeAmigos.forEach(function(amigo){
    let itemLista = document.createElement('li');
    itemLista.textContent = amigo;
    itemLista.setAttribute('role','listitem');
    listaAmigos.appendChild(itemLista);
   });
 }
 
 function sortearAmigo(){
  if (listaDeAmigos.length === 0){
    alert("Por favor, insira um nome.");
    return;
  }
  let amigoAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

  let amigoSorteado = listaDeAmigos[amigoAleatorio];

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;

 }



































/* if(nomeAmigo.trim() !== ""){
    amigos.push(nomeAmigo);
    document.getElementById("nomeAmigo").value = "";
    atulizarListaAmigos();
     } else{
      alert("Por favor, insira um nome.");
     }*/