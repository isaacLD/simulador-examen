// Función para imprimir todos los números impares entre 1 y 50
function imprimirImpares() {
    let resultado = '';

    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) { 
            resultado += i + '\n';
        }
    }

    document.getElementById('resultado').value = resultado;
}


// Función para sumar todos los números del 1 al 100
function sumarNumeros() {
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    document.getElementById('resultado').value = suma;
}



// Función para sumar todos los números pares desde 1 hasta el número dado por el usuario
function sumarNumerosPares() {
let limite = document.getElementById('limite').value;
limite = parseInt(limite); 

let suma = 0;

if (limite > 0) {
    for (let i = 1; i <= limite; i++) {
        if (i % 2 == 0) {
            suma += i;
        }
    }
    document.getElementById('resultado').value = suma;
} else {
   resultado.value = "Por favor ingrese un número válido"
}
}



function imprimirDivisibles() {
let resultado = ''; 

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        resultado += i + '\n';
    }
}

document.getElementById('resultado').value = resultado;
}



function generarTabla() {
    let numero = document.getElementById('numero').value;
    let resultado = '';

    if (numero === '') {
        document.getElementById('resultado').value = 'Por favor, ingrese un número.';
        return;
    }

    numero = parseInt(numero);

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }

    document.getElementById('resultado').value = resultado;
}



function generarFibonacci() {
    let n = document.getElementById('numero').value;
    let resultado = '';

    if (n === '' || n <= 0) {
        document.getElementById('resultado').value = 'Por favor, ingrese un número positivo.';
        return;
    }

    n = parseInt(n);

    let a = 0, b = 1, temp;

    for (let i = 0; i < n; i++) {
        resultado += a + ' ';
        temp = a + b;
        a = b;
        b = temp;
    }

    document.getElementById('resultado').value = resultado.trim();
}




function multiplicarNumeros() {
    let producto = 1;

    for (let i = 1; i <= 10; i++) {
        producto *= i;
    }

    document.getElementById('resultado').value = producto;
}




function calcularFactorial() {
    let numero = document.getElementById('numero').value;
    let factorial = 1;

    if (numero === '' || numero < 0) {
        document.getElementById('resultadoFactorial').value = 'Por favor, ingrese un número positivo.';
        return;
    }

    numero = parseInt(numero);

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    document.getElementById('resultadoFactorial').value = factorial;
}




function calcularFactorial() {
    let numero = document.getElementById('numero').value;
    let factorial = 1;
    let detalle = '';

    if (numero === '' || numero < 0) {
        document.getElementById('resultadoFactorial').value = 'Por favor, ingrese un número positivo.';
        return;
    }

    numero = parseInt(numero);

    for (let i = numero; i > 0; i--) {
        factorial *= i;
        detalle += i;
        if (i > 1) {
            detalle += ' * '; 
        }
    }

        detalle += ' = ' + factorial;
    document.getElementById('resultadoFactorial').value = detalle;
}




function imprimirDivisores() {
    let numero = document.getElementById('numero').value;
    let resultado = '';
    let primero = true; 

    if (numero === '' || numero <= 0) {
        document.getElementById('resultadoDivisores').value = 'Por favor, ingrese un número positivo.';
        return;
    }

    numero = parseInt(numero);

    for (let i = 1; i <= 20; i++) {
        if (numero % i === 0) {
            if (primero) {
                resultado += i; 
                primero = false; 
            } else {
                resultado += ', ' + i; 
            }
        }
    }

    if (resultado === '') {
        resultado = 'No hay divisores en el rango de 1 a 20.';
    }

    document.getElementById('resultadoDivisores').value = resultado;
}



function mostrarDivisores() {
    let numero = document.getElementById('numero').value;
    let resultado = '';
    let primero = true; 
    if (numero === '' || numero <= 0) {
        document.getElementById('resultadoDivisores').value = 'Por favor, ingrese un número positivo.';
        return;
    }

    numero = parseInt(numero);

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            if (primero) {
                resultado += i; 
                primero = false; 
            } else {
                resultado += ', ' + i; 
            }
        }
    }

    if (resultado === '') {
        resultado = 'No tiene divisores distintos de sí mismo.';
    }

    document.getElementById('resultadoDivisores').value = resultado;
}



function verificarPerfecto() {
    let numero = document.getElementById('numero').value;
    let sumaDivisores = 0;
    let resultado = '';

    if (numero === '' || numero <= 0) {
        document.getElementById('resultadoPerfecto').value = 'Por favor, ingrese un número positivo.';
        return;
    }

    numero = parseInt(numero);

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === numero) {
        resultado = `${numero} es un número perfecto.`;
    } else {
        resultado = `${numero} no es un número perfecto.`;
    }

    document.getElementById('resultadoPerfecto').value = resultado;
}



function verificarPrimo() {
    let numero = document.getElementById('numero').value;
    let esPrimo = true;
    let resultado = '';

    if (numero === '' || numero <= 1) {
        document.getElementById('resultadoPrimo').value = 'Por favor, ingrese un número mayor que 1.';
        return;
    }

    numero = parseInt(numero);

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
        }
    }

    if (esPrimo) {
        resultado = `${numero} es un número primo.`;
    } else {
        resultado = `${numero} no es un número primo.`;
    }

    document.getElementById('resultadoPrimo').value = resultado;
}




function invertirDigitos() {
    let numero = document.getElementById('numero').value;
    let resultado = '';

    if (numero === '') {
        document.getElementById('resultadoInvertir').value = 'Por favor, ingrese un número.';
        return;
    }

    for (let i = numero.length - 1; i >= 0; i--) {
        resultado += numero[i];
    }

    document.getElementById('resultadoInvertir').value = `Número invertido: ${resultado}`;
}



function contarDigitos() {
    let numero = document.getElementById('numero').value;
    let resultado = '';

    if (numero === '' || numero <= 0) {
        document.getElementById('resultado').value = 'Por favor, ingrese un número entero positivo.';
        return;
    }

    let cantidadDigitos = numero.length;  

    document.getElementById('resultado').value = `El número tiene ${cantidadDigitos} dígitos.`;
}



function imprimirTriangulo() {
    let numero = document.getElementById('numero').value;
    let resultado = '';

    if (numero === '' || numero <= 0) {
        document.getElementById('resultado').value = 'Por favor, ingrese un número entero positivo.';
        return;
    }

    numero = parseInt(numero); 

    for (let i = 1; i <= numero; i++) {
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += '*'; 
        }
        resultado += linea + '\n'; 
    }

    document.getElementById('resultado').value = resultado;
}
