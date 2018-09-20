Con **substring** Se puede tomar una parte de un string, inicia en 0 y termina en el 10 de izquierda a derecha.
```Javascript
mensaje = 'Aprendiendo Javascript, CSS, HTML para ser frontend';
console.log(mensaje.substring(0,10));
```
Con **slice** se puede recortar el mensajed e derecha a izquierda por eso se pone valor negativo.
```Javascript
mensaje = 'Aprendiendo Javascript, CSS, HTML para ser frontend';
console.log(mensaje.slice(-3));
console.log(mensaje.slice(0,10));
```
Con **split** busca un caracter en particular y corta en oprciones para crear un arreglo. En este caso busca un espacio en blanco.
```Javascript
mensaje = 'Aprendiendo Javascript, CSS, HTML para ser frontend';
console.log(mensaje.spli(' '));
console.log(mensaje.spli(', '));
```
Con **replace** lo que se hace es buscar una palabra y reemplazarla por otra.
```Javascript
mensaje = 'Aprendiendo Javascript, CSS, HTML para ser frontend';
console.log(mensaje.replace('CSS', 'PHP'));
```
Con **includes** devuelve un bool dependiendo si la palabra buscada esté o no en el string.
```Javascript
mensaje = 'Aprendiendo Javascript, CSS, HTML para ser frontend';
console.log(mensaje.include('CSS'));
```
Con **repeat** podemos repetir una cadena de texto la cantidad que se desee.
```Javascript
mensaje = 'Javascript' + ' ';
console.log(mensaje.replace(10));
```
Con **length** podemos saber la cantidad de caracteres de un string
```Javascript
mensaje = 'Aprendiendo Javascript, CSS, HTML para ser frontend';
console.log(mensaje.length);
```
Con **concat** se pueden unir dos string
```Javascript
mensaje = 'Aprendiendo Javascript, CSS, HTML para ser frontend';
console.log(mensaje.concat(' ', 'en udemy'));
```
Con **toUpperCase()** se pone en mayúscula y con **toLowerCase** se pone en minúscula
```Javascript
mensaje = 'Aprendiendo Javascript, CSS, HTML para ser frontend';
console.log(mensaje.toUpperCase());
console.log(mensaje.toLowerCase());
```
Con **indexOf('')** muestra la posición donde encuentra la palabra, si no encutnra un valor devuelve un -1
```Javascript
mensaje = 'Aprendiendo Javascript, CSS, HTML para ser frontend';
console.log(mensaje.indexOf('CSS'));
console.log(mensaje.indexOf('PHP'));
```