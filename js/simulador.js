function calcularTotal() {
  // Obtener los valores ingresados por el usuario
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const aplicarIva = document.getElementById("iva").checked;
  const resultado = document.getElementById("resultado");
  // Calcular subtotal
  let subtotal = precio * cantidad;
  // Aplicar descuento si la cantidad es mayor a 10
  let descuento = 0 
  if (cantidad > 10){
    descuento=subtotal * 0.10
  }
  // Calcular IVA si el checkbox está seleccionado
  let  iva = 0
  if (aplicarIva==true){
    iva = (subtotal - descuento) * 0.15 
  } 
  // Calcular total
  const total = subtotal - descuento + iva;
  // Mostrar resultados en el área de texto
  resultado.innerHTML = `
                Subtotal: ${subtotal.toFixed(2)} USD
                Descuento: ${descuento.toFixed(2)} USD
                IVA: ${iva.toFixed(2)} USD
                Total a pagar: ${total.toFixed(2)} USD
            `;
}

function verificarRespuesta() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '3';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 3 tiene un error 🎉</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function generar_m() {
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
    return;
  }

  
  const respuestaCorrecta = '1';

  
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! 1 es la respuesta que genera m. 🎉</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function facturaTotal(){
  let dia="",tarjeta="", descuento=0,num="",total="",factura="",recargo=0,comision=0, resp=""
  dia = document.getElementById("dia").value
  num = document.getElementById("personas").value
  factura = document.getElementById("Factura").value
  tarjeta = document.getElementById("credito").checked
  resp = document.getElementById("resp")
  num = parseFloat(num)
  factura = parseFloat(factura)
  
   if (dia === "lunes" || dia==="miercoles" && num > 4) {
      descuento = factura * 0.15 
   } 
  if (dia === "sabado" || dia === "domingo"){
      recargo = factura * 0.10 
   } 
   if (tarjeta === true){
      comision = factura * 0.05
   }
  
   total = factura - descuento + recargo + comision
   resp.textContent= `Factura=${factura}\nDescuento = ${descuento.toFixed(2)} \nRecargo= ${recargo.toFixed(2)}\nComisión de tarjeta=${comision.toFixed(2)}\ntotal a pagar = ${total.toFixed(2)} `
  }

  function almacen(){ 
    debugger
    
    let num = document.getElementById("num").value
    let resp = document.getElementById("resp")
    
    
    let l=num.length
    let digitos = []
    for(let i = 0; i<l;i++ ){
     digitos.push(parseInt(num[i]))
    }
    let suma = 0 
    for (let i=0;i<digitos.length; i++){
        suma+= digitos[i]
    }
     resp.textContent= `La suma es ${suma}`
    }
    
    function calcular(){
      let resp="", Divisibles = [],suma=0,sumaimpar=0
      resp = document.getElementById("resp")
      
       for(let i = 1; i <= 50; i++){
          if (i % 3 === 0 && i % 7===0){
              Divisibles.push(i)
              if( i % 2===0){
                  suma+= i 
              } else {
                  sumaimpar+=i
              }
          } 
      }
      
       resp.textContent = `Numero divisibles para  3 y 7 son: ${Divisibles}\nSuma de numeros pares: ${suma}\nSuma de numeros impares: ${sumaimpar} `
      }

      function anidada() {
      
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
      
        // Verificar si se seleccionó una respuesta
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
      
        
        const respuestaCorrecta = 'c';
      
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! El literal c es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }
      
      function restaurante() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }

        const respuestaCorrecta = '36';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! El literal d es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }
      function tren() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = '30';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! El literal c es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function bucle() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'a';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! El literal a es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function requerimiento() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'b';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! El literal b es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function depuracion() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'b';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! El literal b es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      
      function funcionLLamar() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = '20';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! 20 es el resultado de la función llamada. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function funcionSinRetorno() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'd';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal d es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function contarRegresivamente() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'a';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal a es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function multiplicarN() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'a';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal a es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }
      function encontrarMayor() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'c';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal c es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }
      function diagrama1() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'a';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal a es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }
      function diagrama2() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'b';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal b es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }
      function digitosError() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'c';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! La linea 4 tiene el error. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function operadoreslogicos() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'd';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal d es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function and_or() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'd';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal d es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function optimizacion() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'a';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal a es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function ambitoLocal() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'c';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal c es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function complejidad() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'a';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal a es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }
      function valor() {
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'a';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal a es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      

      function fun1(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'b';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal b es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function contarCinco(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'a';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal a es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function sumP(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'a';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal a es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function costo(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'c';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal c es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function esPar(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'c';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal c es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }
      function repartidor(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'a';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal a es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function definir(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'c';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal c es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }
      function pseudo(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'b';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal b es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function cal(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'b';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal b es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }


      function iterario(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'a';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal a es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }
      function mejora(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'd';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal d es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function F_M(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'b';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal b es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }
      function retorno(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'c';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal c es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function pares_(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = '30';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! 30 es la respuesta correcta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      function problema(){
        const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
        const resultadoDiv = document.getElementById('resultado');
        if (!respuestaSeleccionada) {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta"> ¡Selecciona una opción antes de continuar! </p>';
          return;
        }
        
        const respuestaCorrecta = 'd';
        
        if (respuestaSeleccionada.value === respuestaCorrecta) {
          resultadoDiv.innerHTML = '<p class="respuesta-correcta"> 🎉 ¡Correcto! El literal d es la respuesta. 🎉</p>';
        } else {
          resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
        }
      }

      //EJERCICIO 60

function verificarRespuesta60() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '1';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 61

function verificarRespuesta61() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '1';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 62

function verificarRespuesta62() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '1';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 63

function verificarRespuesta63() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '1';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 64

function verificarRespuesta64() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '1';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 65
// Generar un arreglo con 10 números aleatorios
function num_ramdom(){
  const resultado = document.getElementById("resultado");
  let numeros = [];
  for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1); // Números entre 1 y 100
  }

  // Recorrer el arreglo para calcular el promedio de los números pares
  let sumaPares = 0;
  let cantidadPares = 0;

  for (let num of numeros) {
    if (num % 2 === 0) { // Verificar si el número es par
      sumaPares += num;
      cantidadPares++;
    }
  }

  // Calcular el promedio
  let promedioPares = cantidadPares > 0 ? sumaPares / cantidadPares : 0;

  // Mostrar resultados
  resultado.innerHTML = `
  Números generados: ${numeros}
  Promedio de los números pares: ${promedioPares.toFixed(2)}
                      `;
}

//EJERCICIO 66

function num_perfecto(){
  const num1=parseFloat(document.getElementById("num1").value);
  const resultado = document.getElementById("resultado")

  if(num1 <= 1){
    resultado.innerHTML =`el numero 1 o menores que 1 no es valido, ingrese otro numero`
  }

  let sumdiv = 0;
  for(let i=1; i<= Math.floor(num1/2); i++){
    if(num1 % i === 0){
      sumdiv += i;

    }
  }
  if(sumdiv === num1){
    resultado.innerHTML =`el numero ${num1} si es perfecto`
  } else{
    resultado.innerHTML =`el numero ${num1} no es perfecto`
  }
}

//EJERCICIO 67
function verificarRespuesta67() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '1';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 68

function calcularTotalElectrodomestico() {
  // Obtener los valores ingresados por el usuario
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const producto = document.getElementById("producto").value;
  const resultado = document.getElementById("resultado");

  if(isNaN(precio)||isNaN(cantidad)||!producto){
    resultado.innerHTML= "por favor llene todas casillas e ingrese valores validos.";
    return;
  }
  // Calcular subtotal
  let subtotal = precio * cantidad;
  // Aplicar descuento si la cantidad es mayor a 10
  let descuento = 0 
  if (producto === "televisor" & cantidad >= 2){
    descuento+=subtotal * 0.10
  }else if((producto === "refrigerador" || producto==="refrigeradora" && cantidad > 3)){
    descuento += subtotal * 0.15
  }
  let DescuentoTo = subtotal - descuento

  if (DescuentoTo > 2000){
    DescuentoTo-=DescuentoTo * 0.05 
  } 
 

  // Mostrar resultados en el área de texto
  resultado.innerHTML = `
      Subtotal: ${subtotal.toFixed(2)} USD 
      Producto en descuento: ${descuento.toFixed(2)} USD 
      Total despues de descuento: ${DescuentoTo.toFixed(2)} USD
            `;
}

//EJERCICIO 69

function verificarRespuesta69() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '1';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 70 

function verificarRespuesta70() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '1';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 71
function verificarRespuesta71() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '8';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 72  
function verificarRespuesta72() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '5';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 73  
function verificarRespuesta73() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '8';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 74 
function verificarRespuesta74() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '7';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 75

function verificarRespuesta75() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '2';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 76
function verificarRespuesta76() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '2';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 77

function verificarRespuesta77() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '4';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 78
function verificarRespuesta78() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '9';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 79
function verificarRespuesta79() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '3';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

//EJERCICIO 80

function verificarRespuesta80() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '6';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function Empresa_Deliveries() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '6';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function Modelo_abstracto1() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '4';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function Funcion_Programacion() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '2';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function Diagrama_flujo() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '7';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function Bloque_Codigo() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '3';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function Lenguaje1() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '2';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function Condicional_IF() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '8';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function Simboliza() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '1';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}


function Porcentaje() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '96';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function Bucles() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '9';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function Variable1() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '4';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function Depurar() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '3';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}


function ciclo_while() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '2';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function evaluar_condicion() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '2';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function Declarar_else() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '5';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function comparacion4() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '12';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function etiqueta_aa() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '4';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}

function declaracion4() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">** ¡Selecciona una opción antes de continuar! **</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '15';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! Sigue así</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}