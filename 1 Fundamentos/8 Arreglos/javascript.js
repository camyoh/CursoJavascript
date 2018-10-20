const numeros = [10, 20, 30, 40, 50, 60];
console.log(numeros);

//Arreglo de strings método alternativo

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
console.log(meses);
console.log(meses.length);
//para saber si es un arreglo
console.log(Array.isArray(meses));
//ingresar a un valor único 
console.log(meses[1]);
//agregar un valor al final del arreglo
meses.push('Mayo');
console.log(meses);
//encontrar un elemento en el arreglo
console.log(meses.indexOf('Abril'));
//Añadir al inicio del arreglo
meses.unshift('Mes 0');
console.log(meses);
//eliminar último elemento de un arreglo
meses.pop();
console.log(meses);
//eliminar primer elemeneto de un arreglo
meses.shift();
console.log(meses);
//eliminar un elemento específico
meses.splice(2, 1);
console.log(meses);
//quitar un elemento dando el texto
meses.splice(meses.indexOf('Febrero'), 1);
console.log(meses);
//invertir el orden de un arreglo
meses.reverse();
console.log(meses);
//unir un arreglo con otro
let arreglo1 = [1, 2, 3],
    arreglo2 = [5, 7, 8, ];
console.log(arreglo1.concat(arreglo2));
//ordenar un arreglo
const frutas = ['mango','fresas', 'banano','peras'];
console.log(frutas);
frutas.sort();
console.log(frutas);
//ordenando números
arreglo1 = [3,4,2,2,22,31,23,9,1,0,101];
console.log(arreglo1);
console.log(arreglo1.sort());
//creando una función de arreglo para ordenar de menor a mayor
arreglo1.sort(function(a,b){
    return a-b;
})
console.log(arreglo1);
//ordenando de mayor a menor
arreglo1.sort(function(a,b){
    return b-a;
})
console.log(arreglo1);