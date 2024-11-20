// Presentar el nombre y apellido concatenado 
function NombreApellido() {
    let A = document.getElementById("a").value;  
    let B = document.getElementById("b").value;  
    let res = document.getElementById("D");

    let resultado = "";

    for (let i = 0; i < B.length; i++) {
        resultado += B[i];  
    }

    resultado += " ";

    for (let i = 0; i < A.length; i++) {
        resultado += A[i];  
    }

    res.value = `Su apellido y nombre son: ${resultado}`;
}


 
 
//	Presentar la frase mayor
function CompararFrases() {
    let A = document.getElementById("a").value;
    let B = document.getElementById("b").value;
    let r = document.getElementById("D");

    r.value = "";

    if (A === B) {
        r.value = "Las frases son iguales.";
    } else if (A > B) {
        r.value = `La frase mayor es: ${A}`;
    } else {
        r.value = `La frase mayor es: ${B}`;
    }
}

  
// Función para crear una nueva palabra con un espacio entre cada carácter
function IngresarPalabra() {
    let palabra = document.getElementById("palabra").value;
    let resultado = "";

    for (let i = 0; i < palabra.length; i++) {
        resultado += palabra[i];

        if (i < palabra.length - 1) {
            resultado += " ";
        }
    }

    document.getElementById("resultado").value = resultado;
}

    // Función para obtener el código ASCII de cada carácter de la frase
function DadaUnaFrase() {
    let frase = document.getElementById("frase").value;
    let resultado = "";

    for (let i = 0; i < frase.length; i++) {
        resultado += `"${frase[i]}" = ${frase.charCodeAt(i)}\n`;  
    }

    document.getElementById("resultado").value = resultado;
    }

    // Función para invertir una palabra
    function InvertirPalabra() {
    let palabra = document.getElementById("palabra").value; 
    let resultado = ""; 
    for (let i = palabra.length - 1; i >= 0; i--) {
        resultado += palabra[i]; 
    }

    document.getElementById("resultado").value = resultado;
    }


// Función para contar cuántas vocales tiene la palabra ingresada
function contarVocales() {
    let palabra = document.getElementById("palabra").value;
    let contador = 0; 

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == 'a' || palabra[i] == 'e' || palabra[i] == 'i' || palabra[i] == 'o' || palabra[i] == 'u' ||
            palabra[i] == 'A' || palabra[i] == 'E' || palabra[i] == 'I' || palabra[i] == 'O' || palabra[i] == 'U') {
            contador++; 
        }
    }

    document.getElementById("resultado").value = `La palabra tiene ${contador} vocal(es)`;
}


// Función para contar cuántas letras tiene la palabra ingresada

function contarLetras() {
    let palabra = document.getElementById("palabra").value;
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] !== ' ') {
            contador++;
        }
    }

    document.getElementById("resultado").value = `La palabra tiene ${contador} letra(s)`;
}


// Función para contar cuántos digitos tiene una frase ingresada

function contarDigitos() {
    let frase = document.getElementById("frase").value;
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] >= '0' && frase[i] <= '9') {
            contador++;
        }
    }

    document.getElementById("resultado").value = `La frase tiene ${contador} dígito(s)`;
}


// Función para contar cuántos signos de puntuación tiene una frase o palabra ingresada

function contarSignos() {
    let frase = document.getElementById("frase").value;
    let contador = 0;
    let signos = ".,:;!?¿¡\"'()[]{}";

    for (let i = 0; i < frase.length; i++) {
        if (signos.includes(frase[i])) {
            contador++;
        }
    }

    document.getElementById("resultado").value = `La frase tiene ${contador} signo(s) de puntuación`;
}


// Función para contar cuantas palabras tiene una frase ingresada por el usuario

function contarPalabras() {
    let frase = document.getElementById("frase").value;
    let contador = 0;
    let enPalabra = false; 

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] !== ' ' && !enPalabra) {
            enPalabra = true; 
            contador++; 
        }
        else if (frase[i] === ' ') {
            enPalabra = false;
        }
    }

    // Mostrar el resultado en el textarea
    document.getElementById("resultado").value = `La frase tiene ${contador} palabra(s)`;
}
