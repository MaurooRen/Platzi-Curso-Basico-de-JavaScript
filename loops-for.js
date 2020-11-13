// Clase: Loop For
//
// Los ciclos nos sirven para ejecuar tareas u operaciones multiples veces de
// forma automatica, un ejemplo de esto es enviar una serie de saludos a nuestra
// lista de contactos

var contactos = ["Mauricio", "Ramon", "Gretta", "Sofia"]

//funcion que ejecuta UNA tarea, saludar por nombre
function saludar(contacto) {
    console.log(`Hola, ${contacto}`);
}

//Nuestro ciclo
//for(var indice; definimos nuestro punto de parada; contador que incrementa)
//for (var i = 0; i < contactos.length; i++) {
//    saludar(contactos[i])
//}

//Esta funcion hace lo mismo que la de arriba
for(var contacto of contactos) {
    console.log(`Hola, ${contacto}`);
}


//
//
