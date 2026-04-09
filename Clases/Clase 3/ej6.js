console.log ("Guia de ejercicios ES6")
console.log ("-".repeat(100))
console.log ("-Ejercicio 6 - Métodos de array")
console.log ("A)")
const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares);
console.log ("B)")
class Persona {
    constructor(nombre, edad,calificacion) {
        this.nombre = nombre;
        this.edad = edad;
        this.calificacion = calificacion;
    }
}
const personas = [new Persona("Mati", 25, 8), new Persona("Ana", 30, 9), new Persona("Luis", 20, 7)];
const personasInfo = personas.map(persona => ({nombre: persona.nombre, edad: persona.edad}));
console.log(personasInfo);
console.log ("C)")
const personasMayores = personas.filter(persona => persona.edad > 25);
console.log(personasMayores);
console.log ("D)")
const promedioCalificacion = personas.reduce((promedio, persona) => promedio + persona.calificacion, 0) / personas.length;
console.log(promedioCalificacion);