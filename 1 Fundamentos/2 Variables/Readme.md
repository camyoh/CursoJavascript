## Variables

### var
Tener dos variables declaradas no ocasiona ningún error, y siempre va a tomar el último valos declarado. También se pueden dejar vacíos.
```javascript
var nombre = 'Juan';
nombre = 'John'
console.log(nombre);
```
No se pueden usar nombres en variables que empiecen por números o caracteres especiales.
```javascript
var 99nombre;
```

### let
No se puede declarar una variable dos veces.
```javascript
let nombre='juan';
let nombre='juan';
console.log(nombre);
```

### const
No se pueden dejar vacías
```javascript
const producto;
console.log(producto);
```

#### Cadena de texto
Se pueden usar comillas dobles dentro de las comillas sencillas.
```javascript
mensaje = 'y entonces dije "buen curso!"';
console.log(mensaje);
```
También puedo agregar comillas sencillas dentro de sencillas pero debo colocar un \ antes de la comilla.
```javascript
mensaje = 'y entonces dije \'buen curso!\'';
console.log(mensaje);
```