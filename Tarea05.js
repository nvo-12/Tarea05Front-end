//Funcion de suma 
function sumarNumeros(notas){
    let suma = 0;
    for (let nota of notas){
        suma += nota;
    }
    return suma;
}

//Funcion de promedio 
function promedioNotas(notas){
    let suma = sumarNumeros(notas)
    return suma/notas.length; //.length (funcion largo de arreglo)
}

// Notas en arreglo 
const notas = [6,8,9,2,5,10];

// Ejecutar funciones y mostrar promedio
console.log("Promedio de notas:", promedioNotas(notas));