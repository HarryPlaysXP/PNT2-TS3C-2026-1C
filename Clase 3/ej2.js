console.log ("Guia de ejercicios ES6")
console.log ("-".repeat(100))
console.log ("-Ejercicio 2 - Arrays")
console.log("a)");
const frutas = ["manzana", "banana", "pera", "naranja"];
console.log(frutas);
frutas.unshift("fresa");
console.log(frutas);
frutas.push("kiwi");
console.log(frutas);
console.log("b)");
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
const numeros2 = [];
for (let i = 0; i < numeros.length; i++) {
    numeros2.push(numeros[i] * 2);
}
console.log(numeros2);
console.log("c)");
const colores = ["rojo", "verde", "azul"];
console.log(colores);
const colores2 = ["amarillo", "magenta"];
console.log(colores2);
const todosLosColores = colores.concat(colores2);
console.log(todosLosColores);
console.log("d)");
const elementos6 = ["Tierra", "Agua", "Fuego", "Aire", "Vacio","Plasma"];
console.log(elementos6);
elementos6.shift();
console.log(elementos6);
elementos6.pop();
console.log(elementos6);
console.log ("-".repeat(100))