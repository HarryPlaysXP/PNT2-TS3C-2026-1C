console.log ("Arrays en JavaScript")

//metodo para mostras arrays
const mostrarArray = (array)=>{
    array.forEach(element => {
    console.log(element)
})}

const buscarEnArray = (array,buscado) => {
    let encontrado = array.find(i => i == buscado);
    console.log(encontrado)
}

console.log ("-Ejercicio 1 - Recorrer Array")
const frutas = ["manzana", "banana", "pera", "naranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
console.log ("-".repeat(100))

console.log ("-Ejercicio 2 - Recorrer Array con For...of")
for ( const i of frutas){
    console.log(i);
}
console.log ("-".repeat(100))

console.log ("-Ejercicio 3 - Recorrer Array con For each")
frutas.forEach(element => {
    console.log(element)
});
console.log ("-".repeat(100))

console.log ("-Ejercicio 4 - Agregar elemento al Array")
const colores = ["rojo", "verde", "azul"];
mostrarArray(colores)
console.log ("-Agrego colores")
colores.push("amarillo","violeta")
mostrarArray(colores)
console.log ("-".repeat(100))

console.log ("-Ejercicio 5 - Eliminar ultimo elemento")
const numeros = [10, 20, 30, 40, 50];
mostrarArray(numeros)
console.log ("-Elimino ultimo numero")
numeros.pop();
mostrarArray(numeros)
console.log ("-".repeat(100))

console.log ("-Ejercicio 6 - Eliminar primer elemento")
const paises = ["Argentina", "Chile", "Perú", "Brasil"];
mostrarArray(paises)
console.log ("-Elimino primer pais")
paises.shift();
mostrarArray(paises)
console.log ("-".repeat(100))

console.log ("-Ejercicio 7 - Verificar si un elemento existe")
const animales = ["perro", "gato", "conejo", "hamster"];
mostrarArray(animales)
console.log ("-busco animal")
buscarEnArray(animales,"gato")
console.log ("-".repeat(100))

console.log ("-Ejercicio 8 - Modificar un Array")
const alumnos = ["Ana", "Pedro", "Lucía"];
mostrarArray(alumnos)
console.log ("-Agrego a Carlos al final")
alumnos.push("Carlos")
mostrarArray(alumnos)
console.log ("-Elimino primer alumno")
alumnos.shift()
mostrarArray(alumnos)
console.log ("-Busco a Pedro")
buscarEnArray(alumnos,"Pedro")
console.log ("-".repeat(100))

console.log ("-Ejercicio 9 - Mostras pares")
const numerosEj9 = [3, 8, 15, 22, 7, 10];
numerosEj9.forEach(element => {
    if (element % 2 == 0){
    console.log(element)
}})
console.log ("-".repeat(100))

console.log ("-Ejercicio 10 - Carrito")
const carrito = ["pan", "azucar", "huevos"];
mostrarArray(carrito)
console.log ("-Agrego queso al final")
carrito.push("queso")
mostrarArray(carrito)
console.log ("-Elimino ultimo producto")
carrito.pop()
mostrarArray(carrito)
console.log ("-Busco azucar")
buscarEnArray(carrito,"azucar")
mostrarArray(carrito)
console.log ("-".repeat(100))