'use strict'
//slice:  Devuelve una porción del array desde el índice inicio hasta fin

let playlist = ['Fly Away','Lost in Time','Broken Dreams','Eternal Love'];
let selectedSongs = playlist.slice(1,4);
alert(selectedSongs); //Lost in Time,Broken Dreams,Eternal Love

//concat Combina dos o mas arrays en uno nuevo.
// Unir dos listas de tareas
let todoList1 =['Metodologia','Base de Datos'];
let todoList2 =['Interfaces','English'];
let combinedList = todoList1.concat(todoList2);
alert(combinedList); //Metodologia, Base de Datos, interfaces, english

//forEach: Ejecuta una funcion proporcionada una vez por cada
//elemento en el array.
//Imprimir cada elemento de una lista
let fruits =['apple','orange','banana'];
fruits.forEach(fruit => {
    alert(fruit);
}) //apple,orange,banna.

//indexOf: Devuelve el indece de primer elemento que coincide 
//con el valor especificado.
//Encontrar la posición de un elemento en una lista
let colors = ['red','green','blue','black']
let index = colors.indexOf('green');
alert(index); //1

//includes: Comprueba si un array encluye un determinado
//elemento y devielve 'true' o 'false'.
//Verificar si el numero '3' está presente en un conjunto de datos.
let numbersb = [1, 2, 3, 4, 5];
let hasThree = numbersb.includes(3);
alert(hasThree); // true

//find: Devuelve el primer elemento que cumple con la condicion 
//dada por la funcion.
//Encontrar el primer número par en una lista.
let numbersA = [1, 3, 5, 8, 10];
let firstEven = numbersA.find(num => num % 2 === 0);
alert(firstEven); // 8

//findIndex 
// Encontrar el índice del primer número impar
let numbers = [2, 4, 5, 6, 8];
let firstOddIndex = numbers.findIndex(num => num % 2 !== 0);
alert(firstOddIndex); // 2

//findLastIndex 
//Encontrar el índice de la edad par
let ages = [21, 33, 44, 26, 28];
let lastEvenIndex = ages.findLastIndex(age => age % 2 === 0);
alert(lastEvenIndex); // 4


//filter  Crea un nuevo array con todos los elementos que 
//pasan la prueba implementada por la función proporcionada.
let user = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
let longNames = user.filter(name => name.length > 5);
alert(longNames); // ['Charlie']


//map  Crea un nuevo array con los resultados de 
//llamar a una función para cada elemento del array.
// Crear un nuevo array con las palabras en mayúsculas.

let wordsZ = ['apple', 'orange', 'banana'];
let uppercaseWords= wordsZ.map(word => word.toUpperCase());
alert(uppercaseWords); // ['APPLE', 'ORANGE', 'BANANA']

//sort Ordena los elementos de un array.
//Ordenar una lista de nombres alfabéticamente.
let names = ['Alice', 'Charlie', 'Bob', 'David'];
names.sort();
alert(names); // ['Alice', 'Bob', 'Charlie', 'David']

//reverse Invierte los elementos de un array.
//Invertir el orden de una lista de horas.
let hours = ['12:00 PM', '9:00 AM', '3:30 PM', '6:45 AM'];
hours.reverse();
alert(hours); // ['6:45 AM', '3:30 PM', '9:00 AM', '12:00 PM']

//split Divide un string en un array de
// substrings según un separador.
//Dividir una cadena de texto en palabras.
let sentence = 'Hola, ¿cómo estás?';
let words = sentence.split(' ');
alert(words); // ['Hola,', '¿cómo', 'estás?']

//join Combina todos los elementos de un array en una cadena de texto.
//Unir elementos de una lista en una oración.

let fruitsQ = ['apple', 'orange', 'banana'];
let sentenceQ = fruits.join(', ');
alert(sentence); // 'apple, orange, banana'

//reduce Aplica una función acumuladora a cada valor del array, de izquierda a derecha
//Calcular la longitud total de una lista de palabras.
let wordsA = ['apple', 'orange', 'banana', 'kiwi'];
let totalLength = wordsA.reduce((acc, word) => acc + word.length, 0);
alert(totalLength); // 21
