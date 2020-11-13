// Clase: Funcion construtora
//
// Ya vimos como construir objetos en JS, pero... como se puede hacer de forma
// automatica? de forma en la que no tengamos que crear toda la estructura de un
// objeto desde cero, como ejemplo ingresaremos multiples coches, los cuales tienen
// las mismas propiedades 

//Esta funciiones nos permite llamarla para crear la estructura del objeto
//que definimos dentro de la funcion
function auto(marca, modelo, annio) {
     this.marca = marca;
     this.modelo = modelo;
     this.annio = annio;
}

//La creacion de un nuevo un nuev objeto lo hacemos declarando una variable
//y como asignacion creamos una "nueva instancia" del objeto (en este caso
//de la funcion que guarda nuestar estructura) con 'new'
var nuevoCoche = new auto("Tesla", "Model S", 2020);


//RETO: Como crear objetos de forma automatica con un loop?
//Mi enfoque sera crear objetos apartir de una lista, como si estuvieramos
//cargando un excel al programa

var listaOriginal = [["Toyora", "Corolla", 2010], ["Volkswagen", "Passant", 2013], ["Mazda", "CX-9", 2018]];

function nuevoObjeto(marca, modelo, annio) {
     this.marca = marca;
     this.modelo = modelo;
     this.annio = annio;
}


function crearNuevaLista() {
     var carro = []; //Cresmo lista vacia
     for(var i = 0; listaOriginal.length > i; i++) { //Nuestro punto de parada es cuando lleguemos al final de la lista
          carro[i] = new nuevoObjeto(listaOriginal[i][0], listaOriginal[i][1], listaOriginal[i][2])
          //A cada posicion 'carro[i]' le asignamos un objeto diferente
          //cada 'new' objeto cambia en cada iteracion 'i'
          //podriamos haber creado un for interno para acceder a casa posicion del array dentro del array
          //pero no lo quise hacer mas complejo, aun que hubiera sido lo idea. 
     }
     return carro; //Por que retornamos un array?
     //por que asi puedo guardar el resultado en una variable para usarse luego
}

function crearParaMostrar() {
     var lista = [];
     var lista = crearNuevaLista(); //Aqui ejecutamos la funcion y la guardamos en una variable para luego usarla
     
     for(var i = 0; lista.length > i; i++) {
          console.log(`El coche # ${i} es un ${lista[i].marca} modelo ${lista[i].modelo} del annio ${lista[i].annio}`);
     }

     console.log('Si Capital estamos listos!!')
}