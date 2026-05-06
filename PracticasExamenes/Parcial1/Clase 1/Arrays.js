console.log("Practica Clase 1 - Arrays en JavaScript");
console.log("-".repeat(100))
console.log("-Ejercicio 1 - Recorrer un Aray")
const frutas = ["manzana", "banana", "pera", "naranja"];
for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
}
console.log("-Ejercicio 2 - Recorrer un Aray con For...of")
for (const fruta of frutas) {
    console.log(fruta);
}
console.log("-Ejercicio 3 - Recorrer un Aray con Foreach")
frutas.forEach(fruta => {
    console.log(fruta);
});
console.log("-Ejercicio 4 - Agregar elementos a un array")
const colores = ["rojo", "verde", "azul"];
console.log(colores);
colores.push("amarillo");
colores.push("violeta");
console.log(colores);
console.log("-Ejercicio 5 - Eliminar el último elemento")
const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
numeros.pop();
console.log(numeros);
console.log("-Ejercicio 6 - Eliminar el primer elemento")
const paises = ["Argentina", "Chile", "Perú", "Brasil"];
console.log(paises);
paises.shift();
console.log(paises);
console.log("-Ejercicio 7 - Verificar si un elemento existe")
const animales = ["perro", "gato", "conejo", "hamster"];
console.log("Incluye a gato? " +animales.includes("gato")); // true
console.log("-Ejercicio 8 - Modificar un array")
const alumnos = ["Ana", "Pedro", "Lucía"];
console.log(alumnos);
alumnos.push("Carlos");
console.log(alumnos);
alumnos.shift();
console.log(alumnos);
console.log(alumnos.includes("Pedro"));
console.log("-Ejercicio 9 - Recorrer y aplicar una condición")
const numeros2 = [3, 8, 15, 22, 7, 10];
for (const numero of numeros2) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
}
console.log("-Ejercicio 10 - Simular un carrito de compras")
const carrito = ["pan", "azucar", "huevos"];
console.log(carrito);
carrito.push("queso");
console.log(carrito);
carrito.pop();
console.log(carrito);
console.log("Contiene Azucar?" + carrito.includes("azucar"));
console.log(carrito);