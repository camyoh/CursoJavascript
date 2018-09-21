## Strings a Números

```Javascript
const numero1='50', numero2=10, numero3='tres';
console.log(numero1+numero2);//concatena los numeros
console.log(Number(numero1)+numero2);//convierte y suma
parseInt(numero1);//también convierte en número entero
parseFloat(numero1);//también convierte en número flotante
```
### Poner decimal con solo unos decimales

```Javascript
let dato=189.235425;
console.log(dato.toFixed(3))//tres decimales
console.log(dato.toFixed())//sin decimales
```

## Número a String

```Javascript
let cp;
cp = 12039;
cp = String(cp);
console.log(cp.length);//comprobar si un código postal tiene 5 números
let arreglo=[1,2,3];
arreglo = String (arreglo); 
```

