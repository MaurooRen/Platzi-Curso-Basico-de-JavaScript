// Clase: Objetos
//
// La creacion y manipulacion de objetos es un tema escencial en JS
// ya que apartir de estos podremos manipular data de una forma mas organizada
// y estructurada, al ser este el enfoque de un lenguaje de programacion
// orientado a objetos como lo es JS
//
// Que es un objeto?
// Es una pieza de data representada por una variable que contiene
// caracteristicas propias, se podria pensar como un coche, un coche 
// tiene caractetisticas como: color, marca, modelo, annio y millas


var miCoche = {
    marca: "Volkswagen",
    modelo: "Jetta",
    annio: 2017,
    color: "Blanco",
    describir: function() {
        console.log(`El coche de mi suenos es un ${this.marca} ${this.modelo} del annio ${this.annio}`)
    }
}

// Los valores como marca, modelo, annio y color son considerados PROPIEDADES,
// en cambio al crear una 'propiedad' que contiene una funcion, como en ese caso
// una funcion anonima, esta 'propiedad' pasa a llamarse un METODO.

//Como acceder a una propiedad?

miCoche.marca; //Volkswagen

//Como acceder a un metodo?

miCoche.describir(); // El coche de mi suenos es un Volkswagen Jetta...