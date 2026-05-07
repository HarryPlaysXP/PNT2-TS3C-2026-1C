console.log("Practica Clase 3 - Guia de ejercicios ES6");
console.log("Ejercicio 8: Destructuring");
console.log(`a) Dado un objeto con propiedades de una persona, usa destructuring para extraer el nombre y la edad en variables separadas.`);
const Estudiante = {
    nombre: "Alcachofa",
    edad: 115
};
const { nombre, edad } = Estudiante;
console.log(`${nombre}, ${edad}`);
console.log(`b) Utiliza destructuring en una función para extraer las propiedades de un objeto pasado como argumento.`);
const mostrarInfo = ({ nombre, edad }) => `El estudiante se llama ${nombre} y tiene ${edad} años.`;
console.log(mostrarInfo(Estudiante));
console.log(`c) Dado un array con información de una ciudad (nombre, país, población), usa destructuring para asignar cada elemento a una variable.`);
const ciudad = ["Buenos Aires", "Argentina", 30000000];
const [nombreCiudad, pais, poblacion] = ciudad;
console.log(`${nombreCiudad}, ${pais}, ${poblacion}`);