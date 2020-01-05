console.log("\tBienvenido este programa calcula varios elementos de una ecuacion cuadratica\n");
console.log("A continuacion introduzca a, b y c\nDe la forma ax^2+bx+c.");
//Ingresan a,b,c
var aString = prompt("ax^2+bx+c.\nIntroduzca a:");
var bString = prompt("ax^2+bx+c.\nIntroduzca b:");
var cString = prompt("ax^2+bx+c.\nIntroduzca c:");
var a = Number(aString);
var b = Number(bString);
var c = Number(cString);
//Se asignan signos a las variables para la escritura de la ecuacion
var signoB = (aString);
var signoC = (cString);
if (b > 0) {
    signoB = ("+" + bString);
}
if (c > 0) {
    signoC = ("+" + cString);
}
//Forma de la ecuacion
console.log('\nEcuacion caudratica: ');
console.log("(" + aString + ")x^2(" + signoB + ")x(" + signoC + ")");
//forma alterna de escribir la ecuacion
var verticeX = (-b / (2 * a));
var verticeY = (((-1) * (b * b - 4 * a * c)) / (4 * a));
var signoVerticeX = ("" + verticeX);
var signoVerticeY = ("" + verticeY);
//Dominio y Rango
if (a > 0) {
    console.log("Dominio: {Reales R} \tRango: [" + verticeY + ",+infinity[");
}
if (a < 0) {
    console.log("Dominio: {Reales R} \tRango: ]-infinity," + verticeY + "]");
}
console;
//cortes en el eje X y Discriminante
var discriminante = (b * b - 4 * a * c);
console.log("El discriminante es: " + discriminante + "\n");
//Cortes en x
var corteUno = ((-b + Math.sqrt(discriminante)) / (2 * a));
var corteDos = ((-b - Math.sqrt(discriminante)) / (2 * a));
if (discriminante > 0) {
    console.log("cortes en el eje x:\n " + corteUno + " \n " + corteDos + " ");
}
if (discriminante == 0) {
    console.log("Corte en el eje x: " + corteUno);
}
if (discriminante < 0) {
    console.log("No corta en el eje x");
}
//cambios de signo Vertices
if (verticeX <= 0) {
    signoVerticeX = ("+" + -verticeX);
}
if (verticeX > 0) {
    signoVerticeX = ("-" + verticeX);
}
if (verticeY >= 0) {
    signoVerticeY = ("+" + verticeY);
}
console.log("\nForma alterna de escribir la Ecuacion Cuadratica: ");
console.log(a + "(x" + signoVerticeX + ")^2 " + signoVerticeY + " \n");
console.log("Vertice en el eje x: " + verticeX);
console.log("Vertice en el eje y: " + verticeY);
//Monotonia
if (a > 0) {
    console.log("Monotonia:\nDecreciente desde ]-infinity," + verticeX + "[\nCreciente desde [" + verticeX + ",+infinity[");
}
if (a < 0) {
    console.log("Monotonia:\nCreciente desde ]-infinity," + verticeX + "[\nDecreciente desde [" + verticeX + ",+infinity[");
}
