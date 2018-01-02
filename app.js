/*Problema fácil 11 (20 puntos):
Diseñar un programa que lea las calificaciones de un alumno (10 notas en total).
Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo fue aprobado o no.
 Las notas van de 1 a 7 y se aprueba con un promedio igual o mayor a 4. */

//10 notas en total y van de 1 a 7
 var notes =[4.2, 6.2, 5.4, 2.5, 3.8, 6.7, 5.1, 4.9, 2.0, 6.3];
 var notis=[2.5, 5.3, 3.2, 1.0, 2.2, 4.0, 2.8, 3.1, 2.8, 3.4 ];

  function punctuation(arr) { // arr representa mi argumento dentro de notes(is) o cualquier nota.

    var sum=0; //guardo mi suma de notes(is) e inicio en 0

    for(var i=0; i<arr.length; i++){
      sum += arr[i];
    }
    //si el promedio de la suma y division de mis notas me da igual mayor a 4 es aprobado
    if (sum/10 > 4) {
      alert("Has Aprobado");
    }else {
      alert("No has Aprobado");
    }
  }
  console.log(punctuation(notes));


/*  Problema fácil 12 (20 puntos):
Realizar un programa que permita analizar si una palabra que el usuario introduce por teclado es palíndroma o no.
Si es palíndroma debe retornar true, en caso contrario false.
Palíndroma: palabra que se lee igual de adelante hacia atrás como de atrás hacia adelante. Ejemplo: Amalama*/

function palindroma(words) {
    // Convierto la cadena en un array
    var word = prompt("Ingrese una frase");

    var separator = word.split("");
    alert(separator);

    var rev = separator.reverse().join("");
    alert(rev);

    // Verifico sin son iguales

        if (word===rev) { //si word es igual a la inversa retorname verdadero
           return "Es un palíndorma";
        }else{
          return "NO es un palíndroma";// y si no es igual retorname en false
        }
    }

console.log(palindroma());



/*Problema fácil 13 (20 puntos):
Dado dos string (palabra1 y palabra2) escribir una función para determinar si palabra1 es anagrama de palabra2.
Si es anagrama debe retornar true, en caso contrario false.
Una palabra es anagrama de otra cuando contiene las mismas letras en un orden distinto.
Ejemplo: la palabra anagrama es un anagrama de la palabra anmgraaa*/








/*Problema fácil 14 (20 puntos):
Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.
Ejemplo: input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
output nuevoArr = [2, 4, 6, 8, 10]*/

//mi arreglo de 10 números como ejemplo
var numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//creo una variable para mi filtrado de números para esto utilizo "filter"
var pairs= numbers.filter(function(num){
    return num % 2 === 0;//me devuelve mis numeros pares de mi array
  });

  console.log(pairs);//imprimo resultado





/*Problema fácil 15 (20 puntos):
Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.
Ejemplo: input arr = [1, 2, 3, 4]
output nuevoArr = [12, 24, 36, 48]*/

var arr = [1, 2, 3, 4];// mi arreglo con 4 numeros positivos

for(var i=0; i<arr.length; i++){ // inicializo, contabilizo e itero uno en uno
  newarr = arr[i]*12;//genero una nuevo array multiplicando a cada uno de mis elementos

  console.log(newarr);//imprimo resultado
  }
