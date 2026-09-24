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
// EJERCICIO 4
//-----------------------------------------------------------------
document.title = 'Lenguaje de marcas';
document.write('<h1>Lenguaje de marcas</h1>');

var notaPractica = parseInt(prompt('Introduce la nota de tus practicas'));
var notaExamen = parseInt(prompt('Introduce la nota de tu examen'));
var notaActitud = parseInt(prompt('Introduce la nota de tu actitud'));

var notaMedia = (notaPractica + notaExamen + notaActitud) / 3;
document.write(`<p>Tu nota media es ${notaMedia.toFixed(2)}</p>`);

if (notaMedia >= 5) {
    document.write('<p>Enhorabuena! Has aprobado!</p>');
}
else {
    document.write('<p>Vaya! Tendras que ir a recuperacion</p>');
}
//-----------------------------------------------------------------
// EJERCICIO 5
// -----------------------------------------------------------------
var marca = prompt('Escriba la marca del ordenador');
var modelo = prompt('Escriba el modelo del ordenador');
var descuento = 0;
var precio = 1000;

if (marca == 'MSI' && modelo == 'PRESTIGE') {
    descuento = 5;
}
else if (marca == 'HP' && modelo == 'Pavilion') {
    descuento = 10;
}

var precioDescuento = precio - (precio * descuento / 100);
document.write(`<p>Tienes un descuento de ${descuento}%</p>`);
document.write(`<p>El precio final es ${precioDescuento}</p>`);
//-----------------------------------------------------------------
// EJERCICIO 6
//-----------------------------------------------------------------
var tamano = prompt('Escribe un numero de nivel de encabezado');
document.write(`<h${tamano}>Encabezado nivel ${tamano}</h${tamano}>`);