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
No se pueden declarar una variable dos veces.
```javascript
let nombre='juan';
console.log(nombre);
```

### const
No se pueden dejar vacías
```javascript
const producto;
console.log(producto);
```