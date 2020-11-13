// Clase: Scope
//
//  El Scope se refire al alcance de las variables, y que es el alcance de las variables?
//  El alcance de las variables se puede definir por que tan accesibles o no son estas
//
//  Por ejemplo:

    var nombre;
    nombre = "Mauricio"
    //La variable nombre esta en el Scope Global, lo que significa que puede ser
    //accedida por cualquier funcion dentro de nuestro programa

    function saludar() {
        var apellido;
        apellido = "Rengifo";
        console.log(`Hola ${nombre} ${apellido}`);
        //Como vemos en la funciones estamos haciendo uso de dos varibles 'nombre' y 'apellido'
        //'nombre' hace parte del Scope Global al ser declarada por fue de cualquier funcion
        //'apellido' hace parte del Scope Local de la funcion 'saludar'
    }

    saludar();
    //el ejecutar nuestra funcion estamos accediendo a la variable externa 'nombre' para hacer uso de su data


    console.log(apellido);
    //Resultado -> apelido en undefined
    //
    //Por que? Esto es un claro ejemplo de Scope Local, la variable 'apellido'
    //fue creada dentro de la funcion, lo cual crea un "mundo interior", lo que significa que
    //lo que esta adentro de esta funcion no puede ser accedido desde afuera, pero mi mundo interior
    //puede acceder a todo lo que existe afuera, como comida, energia y otras variales que si esten
    //declaradas en el Scope Global, como por ejemplo 'nombre'
    

