class ListaNotas {
  constructor() {
    this.arr=[];
  }
  agregarNota(Nota){
    this.arr.push(Nota);
  }
  mostrarNotas(lista,busqueda)
  {
    this.buscar(busqueda,lista,this);
      for(let i=this.arr.length-1;i>=0;i--){
        let nota=this.arr[i];
  
        if (busqueda.value==null || nota.titulo.includes(busqueda.value)|| nota.descripcion.includes(busqueda.value)){
        const li=document.createElement('li');
        
          li.innerHTML = "<b> Titulo: </b>" + nota.titulo;
          if (nota.descripcion != "") {
            li.innerHTML += "<br> <b> Descripcion : </b>" + nota.descripcion;
          }
        
        let botonBorrar = this.eliminarNota(i,lista,busqueda);
  
        lista.appendChild(li);//muestra la fila "li" (itera en i)
        lista.appendChild(botonBorrar); //muestra el botonborrar
          }
       }
    return lista;
  }
  
  eliminarNota(i,lista,busqueda)
  {
    const botonBorrar = document.createElement('button');
      botonBorrar.innerHTML = "BORRAR";

      const LN = this; //crear una instancia y poder trabajar con eventos dentro la funcion a continuacion

      botonBorrar.addEventListener('click', function() {
        LN.arr.splice(i,1); //elimina 1 (2do parametro) elemento de un array dada una posicion (1er parametro)
        lista.innerHTML = ''; //sobre escribe un espacio en blanco en esa seccion
        LN.mostrarNotas(lista,busqueda); //vuelve a mostrar la lista despues de haber sido modificada
      });
      return botonBorrar;
  }
  buscar(busqueda,lista,LN)
  {
    busqueda.addEventListener("input", () => {
      lista.innerHTML = ""; //limpia la lista para volver a mostrarla con las notas filtradas
      lista = LN.actualizarLista(lista, busqueda);
    });
    return busqueda;
  }
  actualizarLista(lista,busqueda)
  {
      for(let i=this.arr.length-1;i>=0;i--){
        let nota=this.arr[i];
  
        if (busqueda.value==null || nota.titulo.includes(busqueda.value)|| nota.descripcion.includes(busqueda.value)){
        const li=document.createElement('li');
        
          li.innerHTML = "<b> Titulo: </b>" + nota.titulo;
          if (nota.descripcion != "") {
            li.innerHTML += "<br> <b> Descripcion : </b>" + nota.descripcion;
          }
        
        let botonBorrar = this.eliminarNota(i,lista,busqueda);
  
        lista.appendChild(li);//muestra la fila "li" (itera en i)
        lista.appendChild(botonBorrar); //muestra el botonborrar
          }
       }
   return lista;
  }

}

export default ListaNotas;
