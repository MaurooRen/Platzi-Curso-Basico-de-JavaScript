


//Hoisting con funciones
felizCumple();

function felizCumple() {
    console.log("Es tu cumple, feliz cumple!");
}

//Resultado
//  > undefined
//  > Es tu cumple, feliz cumple!

// Por que ocurre el 'undefined'??
// por que JS antes de ejecutar el codigo, lo 'complila' lo que quiere decir que lo lee
// e inicializa todas las variables y funciones antes de proceder a su ejecucion
// el hosting a lo que se refiere es a ese efecto.
// Si llamamos a una variable o funcion antes de crearla o inicializarla, JS se toma la libertad de
// hacerlo por nosotros y rellenar ese espacio en memoria con un undefined.
// Ya despues en la ejecucion se mostrara lo esperado que fue definido por nosotros

//BUENAS PRACTICAS
// Siendo coherentes, siempre declara e inicializa cualquier variable o funcion que vayas a utilizar