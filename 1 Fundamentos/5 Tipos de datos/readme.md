## Tipos de datos
No es necesario declarar el tipo de dato
### primitivos
```Javascript
let valor;
valor = 'Cadena de texto';
valor = 10;
valor = true;
valor = null;
valor = undefined;

console.log(valor);
```
#### typeof *variable*
Muestra el tipo de valor, todos los números en Javascript son de tipo number (2, 2.3, -30, -30.3).  
```Javascript
let valor;
valor = 'juan';
console.log(typeof valor);
```
### de referencia
```Javascript
let valor;
//arreglo
valor = [1,2,3,4];
//objeto
valor = {
    nombre: 'juan',
    profesion: 'estudiante'
    }
//fecha
valor = new Date();
console.log(typeof valor);
```
