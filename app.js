/*  Problema medio 9 (30 puntos):
Dados dos arreglos, devolver un nuevo arreglo que contenga la suma de los índices de cada array, arr1[índice 0] + arr2[índice 0] = nuevoArr[indice 0]
Ejemplo:   arr1 = [1, 2, 3, 4]
		     arr2 = [5, 6, 7, 8]
		     retorna nuevoArr = [6, 8, 10, 12]*/

arr1 = [1, 2, 3, 4]; //mis dos arreglos
arr2 = [5, 6, 7, 8];
 function sumArray(arr1,arr2){ // arr1 y arr2 son cualquier array
   var resultArr=[]; //creo un nuevo array que tendra la suma de los elementos que estan en la misma posición en los array
  for(i=0;i<arr1.length;i++){ //recorro los array , los dos tienen la misma longitud si que pongo que tenga la longitud de arr1
           resultArr[i]=arr1[i]+arr2[i]; // entonces mi nuevo array , arr2 en las distintas posiciones que recorra con el for , va a ser igual a las sumas de estas
            //posiciones del arr1 y el arr2.
          }return resultArr; //retorno mi nuevo array.

         }
         console.log(sumArray(arr1,arr2));


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

function anagrama(palabra1,palabra2){ //las dos palabras
 var word1=palabra1.split("");//convirtiendo el string en array para aplicar metodo sort
 var word2=palabra2.split("");//convirtiendo la segunda palabra en array para aplicar sort que es un metodo que ordena numeros y palabras
  var orden1=word1.sort(); // ordenando el array con metodo sort
  var orden2=word2.sort();// ordenando el array con metodo sort
  if(palabra1.length!==palabra2.length){ // si las palabras tienen longitud diferente automaticamente es false
    return false;
  }else
  for(var i=0; i<orden1.length;i++){ // recorro los array
    if(orden1[i]===orden2[i]){ // como estan orden los dos array entonces si orden1 en la posicion i es  igual al orden2 en posición i , es true
      return true;
    }else{
      return false; //cualquier otro es falso.
    }
  }
}
console.log(anagrama("anagrama","anmgraaa"));




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
