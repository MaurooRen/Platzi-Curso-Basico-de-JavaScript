var temperaturasPollo = [160, 140, 100, 80, 60, 20, 10, 0]


function masterPollon(temperatura) {
    if(temperatura < 140)
    {
        console.log("El pollo esta vivo");
    }
    else if (temperatura < 160) {
        console.log("Llamemoslo termino medio")
    }
    else {
        console.log("Listo el pollo!!")
    }
}

while(temperaturasPollo.length > 0) {
    var rostizado = temperaturasPollo.pop();
    masterPollon(rostizado)
}