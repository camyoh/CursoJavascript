//El prompt sirve para pedir datos al usuario y almacernarlos en variables
let nombre = prompt('¿Cuál es su nombre?');
let edad = prompt('Cual es su edad');

document.getElementById('app').innerHTML = `Bienvenido ${nombre}, tu edad es ${edad} años`;