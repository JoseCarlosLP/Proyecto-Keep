import Nota from "./class-Nota";
import ListaNotas from "./class-ListaNotas";

const titulo = document.querySelector("#nota_titulo");
const descripcion = document.querySelector("#nota_desc");
const form = document.querySelector("#form-CrearNota");
let lista = document.getElementById('lista');
const busqueda = document.getElementById("buscador");
const LN = new ListaNotas();
let id = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  lista.innerHTML=""; //limpia la lista para volver a mostrarla sin duplicados

  let tit=titulo.value;
  let desc=descripcion.value;
  const nota1 = new Nota(id,tit,desc);
  id++;

  LN.agregarNota(nota1);

  lista = LN.mostrarNotas(lista,busqueda);
});
