class ListaNotas {
  constructor() {
    this.arr=[];
    this.ult=0;
  }
  agregarNota(Nota){
    this.arr.push(Nota);
    this.ult++;
  }
  mostrarNotas(lista)
  {
    for(let i=this.arr.length-1;i>=0;i--){
      let nota=this.arr[i];
      const li=document.createElement('li');
      li.innerHTML="<b> Titulo: </b>" + nota.titulo;
      lista.appendChild(li);
    }
    return lista;
  }
}

export default ListaNotas;
