//Clase: Funciones
//
//Las funciones se pueden dividir en 2: Declarativas/Statement y Anonimas/Expression
//
//  Funcion Declarativas/Statement
//
// palabraReservada nombreDeLaFuncion(parametro1, parametro2...) { cuerpoDeLaFuncion... }
// una buena practica es tener claro que: toda funcion creada debe realizar UNA y solo UNA accion o retorno
// esto hace parte de dividir grandes problemas en piezas pequennas.

function diasDelAnno() {
    return 365;
}

//Como ejecutar la funcion?
//al ser declarativa debemos llamar la con el nombreDeLaFuncion seguido de los ()
diasDelAnno();



//  Funcion Anonimas/Expression
//
// las variables puedes almacenar diferentes tipos de datos, en este caso almacena una funcion
// en este caso creamos la variable mostrarNombre que almacena una funcion que recibe un parametro
// y ese paramatro(nombre) lo usamos para enviar informacion a la funcion.

var mostrarNombre = function(nombre) {
    console.log(nombre)
}

//Como ejecutar la funcion?
//al ser anonima debemos usar el nombre de la variable seguido de los ()
mostrarNombre('Mauricio');


//Reto: usar una funcion expresiva para obtener el output 'Buenos dias Mauricio'

var saludarPersona = function(nom) {
    console.log(`Buenos dias ${nom}`);
    //Esto se llama Template String, pero! tambien puede ser conocido como interpolacion de variables
    //se utiliza para obtener resultados mas complejos, como en este caso la suma de una variable + string
    // etnassoft.com/2016/10/05/template-strings-en-es6-estudiando-las-nuevas-plantillas-de-cadena-en-javascript/#:~:text=Las%20plantillas%20de%20texto%20(o,('casi%20literales').
}


//Hoisting (https://developer.mozilla.org/es/docs/Glossary/Hoisting)
//Leer mas al respecto.