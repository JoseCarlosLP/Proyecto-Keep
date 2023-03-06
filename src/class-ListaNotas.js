class ListaNotas {
  constructor() {
    this.arr=[];
  }
  agregarNota(Nota){
    this.arr.push(Nota);
  }
  mostrarNotas(lista)
  {
    for(let i=this.arr.length-1;i>=0;i--){
      let nota=this.arr[i];
      const li=document.createElement('li');
      li.innerHTML="<b> Titulo: </b>" + nota.titulo;
      if(nota.descripcion!="")
        li.innerHTML+="<br> <b> Descripcion : </b>" + nota.descripcion;
      li.innerHTML+="<br> <br>";

      //BOTON ELIMINAR NOTA
      const botonBorrar = document.createElement('button');
      botonBorrar.innerHTML = "BORRAR";

      const LN = this; //crear una instancia y poder trabajar con eventos a continuacion

      botonBorrar.addEventListener('click', function() {
        LN.arr.splice(i,1); //elimina 1 (2do parametro) elemento de un array dada una posicion (1er parametro)
        lista.innerHTML = ''; //sobre escribe un espacio en blanco en esa seccion
        LN.mostrarNotas(lista); //vuelve a mostrar la lista despues de haber sido modificada
      });

      lista.appendChild(li);//muestra la fila "li" (itera en i)
      li.appendChild(botonBorrar); //muestra el botonborrar
      li.innerHTML+="<br> <br>";
    }
    return lista;
  }
  eliminarNota()
  {
    
  }
}

export default ListaNotas;
