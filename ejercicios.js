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