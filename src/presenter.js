import Nota from "./class-Nota";
import ListaNotas from "./class-ListaNotas";

// const first = document.querySelector("#primer-numero");
// const second = document.querySelector("#segundo-numero");

const titulo = document.querySelector("#nota_titulo");
const form = document.querySelector("#form-CrearNota");
let lista = document.getElementById('lista');
const LN = new ListaNotas();
let id = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  lista.innerHTML=""; //limpia la lista para volver a mostrarla sin duplicados
  let tit=titulo.value;
  const nota1 = new Nota(id,tit);
  id++;
  LN.agregarNota(nota1);
  lista = LN.mostrarNotas(lista);
});
