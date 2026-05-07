console.log("Practica Clase 3 - Guia de ejercicios ES6");
console.log("Ejercicio 6: Métodos de array");
console.log("a) Dado un array de números, utiliza `filter()` para obtener un nuevo array solo con los números pares.");
const numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(`Numeros: ${numeros}`)
const pares = numeros.filter(num => num % 2==0)
console.log(pares)
console.log(`b) Crea un array de objetos representando estudiantes con propiedades de nombre, edad y
calificación. Usa "map()" para obtener un nuevo array solo con los nombres y las edades de
los estudiantes.`)
class Estudiante {
    constructor(nombre, edad, calificacion) {
        this.nombre = nombre;
        this.edad = edad;
        this.calificacion = calificacion;
    }
}
const estudiantes = [new Estudiante("Juan", 20, 10), new Estudiante("Ana", 26, 9), new Estudiante("Pedro", 19, 8)];
console.log(estudiantes);
const lista =  estudiantes.map(estudiantes => ({nombre: estudiantes.nombre,edad:estudiantes.edad}))
console.log(lista)
console.log(`c) Dado el array de objetos con nombre y edad anterior, usamos find() para obtener la
primera persona mayor de 25 años.`)
const mayor25 = estudiantes.find(estudiantes => (estudiantes.edad > 25))
console.log(`${mayor25.nombre} edad: ${mayor25.edad}`)
console.log(mayor25)
console.log(`d) Utiliza "reduce()" para calcular la suma de todos los números en un array.`)
// uso numeros del punto a)
const suma = numeros.reduce((acum, valor) => acum + valor, 0)
console.log(suma)