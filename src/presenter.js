// import sumar from "./sumador";

// const first = document.querySelector("#primer-numero");
// const second = document.querySelector("#segundo-numero");

const titulo = document.querySelector("#nota_titulo");
const form = document.querySelector("#form-CrearNota");
const array=["nota 1","nota 2","nota 3"];
const lista=document.getElementById('lista');


form.addEventListener("submit", (event) => {
  event.preventDefault();
  let tit=titulo.value;
  array.push(tit);
  for(let i=0;i<array.length;i++){
    const nota=array[i];
    const li=document.createElement('li');
    li.textContent=nota;
    lista.appendChild(li);
  }
});
