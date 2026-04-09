console.log ("Missionbriefing")
console.log ("-Ejercicio 1 - Contar hasta 5")
for (let index = 1; index < 6; index++) {
    console.log(index);
}
console.log ("-".repeat(100))

console.log ("-Ejercicio 2 - Recorrer Array con 'for'")
let nombres = ["Enero","Febrero","Marzo", "Abril"]
for (let index = 1; index < nombres.length; index++) {
    console.log(nombres[index]);
}
console.log ("-".repeat(100))

console.log ("-Ejercicio 3 - Indicar Estacion segun mes")
let mes = 11;
switch (mes) {
    case 1:    case 2:    case 3:        
        console.log ("Veranito")
        break;
    case 4:    case 5:    case 6:
        console.log ("Otoñito")
        break;
    case 7:    case 8:    case 9:
        console.log ("Inviernito")
        break;
    case 10:    case 11:    case 12:
        console.log ("Primaveriña")
        break;
    default:
        console.log("No estas en saturno, el año tiene 12 meses ;)")
        break;
}
console.log ("-".repeat(100))

console.log ("-Ejercicio 4 - Mostrar Pares entre 1 y 10")
for (let index = 1; index < 11; index++) {
    
    if (index % 2 == 0){
        console.log(index);
    }
    
}
console.log ("-".repeat(100))

console.log ("-Ejercicio 5 - Calculadora Flecha")
const suma = (a , b) => {
    console.log(a + b);
}
const resta = (a , b) => {
    console.log(a - b);
}
const multi = (a , b) => {
    console.log(a * b);
}
const div = (a , b) => {
    if (b != 0){
        console.log(a / b);
    } else {
        console.log("Al infinito y más alla!");
    }
}
let a = 100
let b = 10
suma(a,b)
resta(a,b)
multi(a,b)
div(a,b)