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
//-----------------------------------------------------------------
// EJERCICIO 7
//-----------------------------------------------------------------
var correcto = false;
var intentosMaximos = 3;
var intentoActual = intentosMaximos;

var respuestaCorrecta = 'Velázquez';
var respuestaUsuario;
while(intentoActual > 0 && !correcto) {
    respuestaUsuario = prompt('¿Quién es el pintor de las Meninas?');
    console.log(respuestaCorrecta == respuestaUsuario)

    if (respuestaCorrecta == respuestaUsuario) {
        correcto = true;
    }
    else {
        intentoActual--;
    }
}
if (correcto) {
    alert('Correcto! Ha acertado.');
}
else {
    alert('Lo siento! La respuesta correcta es Velázquez');
}
//-----------------------------------------------------------------
// EJERCICIO 8
//-----------------------------------------------------------------
var dinero = 30;

while(dinero != 0 && dinero <= 120){
    var apuesta = parseInt(prompt(`Cuanto dinero quieres apostar (Tu dinero: ${dinero})`));
    var numeroApostado = parseInt(prompt('A que numero (1-6) quieres apostar'));

    var numGanador = Math.floor(Math.random() * 5 + 1);
    
    if(apuesta <= dinero) {
        if (numeroApostado == 0) {
            break;
        }
        
        if (numeroApostado == numGanador){
            dinero += apuesta + 10;
            alert(`Ha salido ${numGanador}! Has ganado!`);
        }
        else {
            dinero -= apuesta;
            alert(`Ha salido ${numGanador}! Has perdido`);
        }
    }
    else {
        alert('No puedes apostar mas dinero del que tienes');
    }
}
// -----------------------------------------------------------------
// EJERCICIO 9 y 10
// -----------------------------------------------------------------
var nombres = prompt('Dame una lista de nombres separados por coma');
nombres = nombres.split(',');

for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i];
    
    document.write(`<p>Hola ${nombre}</p>`);
}
document.write(`<p>Hay un total de ${nombres.length} personas</p>`);
document.write(`<p>La primera persona es ${nombres[0]}</p>`);
document.write(`<p>La ultima persona es ${nombres[nombres.length - 1]}</p>`);

console.log(nombres.sort());
console.log(nombres.reverse());
