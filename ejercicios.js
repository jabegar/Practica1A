// EJERCICIO 1
//-----------------------------------------------------------------
var nombre = prompt('Escribe aqui tu nombre');
document.write('<h1>Hola ' + nombre + '</h1>');
document.write('Tu nombre tiene ' + nombre.length + ' letras');
//-----------------------------------------------------------------
// EJERCICIO 2
//-----------------------------------------------------------------
var texto = prompt('Escribe letras al azar');
var num = prompt('Escribe una posicion');

if (num > texto.length) {
    alert('El numero es demasiado grande');
}
else {
    alert('En la posición ' + num + ' de la cadena ' + texto + ' se encuentra el carácter ' + texto[num]);
}
//-----------------------------------------------------------------
// EJERCICIO 3
//-----------------------------------------------------------------
var num1 = prompt('Inserte un numero');
var num2 = prompt('Inserte otro numero');

alert(`La suma es: ${num1 + num2}\nLa resta es: ${num1 - num2}\nLa multiplicación es: ${num1 * num2}\nLa división es: ${num1 / num2}`);
//-----------------------------------------------------------------