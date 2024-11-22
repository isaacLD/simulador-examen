function mostrarNumeros() {
    let arreglo = [];

    for (let i = 0; i < 10; i++) {
        arreglo[i] = Math.floor(Math.random() * 100) + 1;
    }

    let numerosGenerados = "Los números aleatorios generados son:\n";
    for (let i = 0; i < 10; i++) {
        numerosGenerados += arreglo[i] + "\n"; 
    }

    document.getElementById('numeros').value = numerosGenerados;
}



function PromedioNotas() {
    let calificaciones = [];
    let suma = 0;
    let promedio;

    let input = document.getElementById('numeros').value;
    calificaciones = input.split(',').map(Number);

    if (calificaciones.length !== 5) {
        document.getElementById('resultado').value = "Por favor, ingrese exactamente 5 calificaciones.";
        return;
    }

    for (let i = 0; i < 5; i++) {
        suma += calificaciones[i];
    }

    promedio = suma / 5;

    document.getElementById('resultado').value = `El promedio es: ${promedio}`;
}



function encontrarMaximo() {
let numeros = document.getElementById('numeros').value;

let arreglo = numeros.split(',').map(Number); 

let maximo = arreglo[0];

for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
        maximo = arreglo[i];
    }
}

document.getElementById('resultado').innerText = "El número más grande es: " + maximo;
}



function calcularPromedio() {
    let limite = parseInt(document.getElementById('limite').value); 
    let numeros = document.getElementById('numeros').value; 

    let arreglo = numeros.split(',').map(Number);
    
    let suma = 0;
    let contador = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > limite) {
            suma += arreglo[i]; 
            contador++;  
        }
    }

    if (contador > 0) {
        let promedio = suma / contador; 
        document.getElementById('resultado').value = "Promedio: " + promedio;
    } else {
        document.getElementById('resultado').value = "No hay números mayores al límite.";   
    }
}



function encontrarMinimo() {
    debugger
    let numeros = document.getElementById('numeros').value;

    let arreglo = numeros.split(',').map(Number);

    let minimo = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < minimo) {
            minimo = arreglo[i];
        }
    }

    document.getElementById('resultado').value = "El número más pequeño es: " + minimo;
}


function calcularPromedioPares() {
    debugger
let numeros = document.getElementById('numeros').value;

let arreglo = numeros.split(',').map(Number);

let suma = 0;
let contador = 0;

for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
        suma += arreglo[i];
        contador++;               
    }
}

if (contador > 0) {
    let promedio = suma / contador; 
    document.getElementById('resultado').value = "Promedio de los números pares: " + promedio;
} else {
    document.getElementById('resultado').value = "No hay números pares en el arreglo."; 
}
}


function sumarDigitos() {
    let numero = document.getElementById('numero').value;
    let digitos = numero.split('').map(Number);
    let suma = 0;

    for (let i = 0; i < digitos.length; i++) {
        suma += digitos[i];
    }
    document.getElementById('resultado').value = "La suma de los dígitos es: " + suma;
}



function contarYSumar() {
    let numeros = document.getElementById('numeros').value;
    let arreglo = numeros.split(',').map(Number);
    let positivos = 0, negativos = 0, sumaPositivos = 0, sumaNegativos = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 0) {
            positivos++;
            sumaPositivos += arreglo[i]; 
        } else if (arreglo[i] < 0) {
            negativos++;          
            sumaNegativos += arreglo[i];
        }
    }
    document.getElementById('resultado').value = 
        "Positivos: " + positivos + " | Suma de Positivos: " + sumaPositivos + "\n" +
        "Negativos: " + negativos + " | Suma de Negativos: " + sumaNegativos;
}



function calcularCuadrados() {
    let numeros = document.getElementById('numeros').value;
    let arreglo = numeros.split(',').map(Number);
    let cuadrados = arreglo.map(function(num) {
        return num * num;
    });
    document.getElementById('resultado').value = "Arreglo original: " + arreglo + "\n" + "Arreglo con cuadrados: " + cuadrados;
}


function sumarArreglos() {
    let arreglo1 = document.getElementById('arreglo1').value;
    let arreglo2 = document.getElementById('arreglo2').value;
    let arr1 = arreglo1.split(',').map(Number);
    let arr2 = arreglo2.split(',').map(Number);

    if (arr1.length !== arr2.length) {
        document.getElementById('resultado').value = "Los arreglos deben tener la misma cantidad de elementos.";
        return;
    }

    let sumaArreglo = [];
    for (let i = 0; i < arr1.length; i++) {
        sumaArreglo.push(arr1[i] + arr2[i]);
    }
    document.getElementById('resultado').value = "Arreglo 1: " + arr1 + "\n" + "Arreglo 2: " + arr2 + "\n" + "Suma de los arreglos: " + sumaArreglo;
}
