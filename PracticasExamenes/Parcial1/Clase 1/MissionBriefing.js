console.log("Practica Clase 1 - Mission Briefing");
console.log("-".repeat(100))
console.log("-Ejercicio 1 - Mostrar numeros del 1 al 5")
for (let index = 1; index < 6; index++) {
    console.log(index);
}
console.log("-".repeat(100))
console.log("-Ejercicio 2 - Iterar Array con For")
let nombres = ["Juan","Pedro","Maria", "Ana"]
for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index]);
}
console.log("-".repeat(100))
console.log("-Ejercicio 3 - Determinar la estacion del año segun el mes")
let mes = 1;
if (mes >= 1 && mes <= 3){
    console.log("Verano");
} else if (mes >= 4 && mes <= 6){
    console.log("Otoño");
} else if (mes >= 7 && mes <= 9){
    console.log("Invierno");
} else if (mes >= 10 && mes <= 12){
    console.log("Primavera");
} else {
    console.log("No estas en saturno, el año tiene 12 meses ;)");
}
console.log("-".repeat(100))
console.log("-Ejercicio 4 - Mostrar numeros pares entre 1 y 10")
for (let index = 1; index < 11; index++) {
    if ( index % 2 == 0){
        console.log(index);
    }
}
console.log("-".repeat(100))
console.log("-Ejercicio 5 - Calculadora con funciones flecha")
const suma = (a, b) => {
    console.log(a + b);
}
const resta = (a, b) => {
    console.log(a - b);
}
const multiplicacion = (a, b) => {
    console.log(a * b);
}
const division = (a, b) => {
    if (b != 0){
        console.log(a / b);
    } else {
        console.log("No se puede dividir por cero");
    }
}
let a = 10;
let b = 5;
suma(a, b);
resta(a, b);
multiplicacion(a, b);
division(a, b);
b = 0;
division(a, b);