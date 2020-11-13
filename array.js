// Clase: Array
//
//Los array puden ser conjuntos de datos o mejor llamados 'listas'
//estas listas nos permiten agrupar grandes cantidades de data en una unica
//variable a la cual podemos acceder despues
//

var listaDeMercado = ["arroz", "carne", "verduras", "aguacate"];

//cada lista sera definida y contenida dentro de los []
//para acceder a cada 'posicion' de lista lo haremos usando indices
//y en JS es bien conocido que la primera posicion de una lista es siempre el '0'

console.log(listaDeMercado[0]) //arroz
console.log(listaDeMercado[1]) //carne
console.log(listaDeMercado[2]) //verduras

//RETO: Como saber cuantas cosas tienes en tu 'lista de mercado'?
//para eso usamos una propiedad que nos dice le largo de la lista

console.log(listaDeMercado.length); //4


//RETO: a tu mama se le olvido agregar el "azucar", como lo puedes agregar al final?
//para este ejemplo crearemos una nueva lista y 'empujaremos' el "azucar" a la
//ultima posicion de nuestro array

listaDeMercado.push("azucar");

//tu mama olvido que en la casa hay 'azucar' ahora hay que quitarla de la lista

listaDeMercado.pop();

//RETO: Tu mama te dice que lo primero que debes comprar es la leche
//agregala de primero antes de que se acabe

listaDeMercado.unshift("leche")



//Como eliminar el primer elemento?
listaDeMercado.shift() 



//Como encontrat el indice de un elemento por su contenido
listaDeMercado.indexOf("verduras");