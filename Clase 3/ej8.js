console.log ("Guia de ejercicios ES6")
console.log ("-".repeat(100))
console.log ("-Ejercicio 8 - Destructuring")
console.log ("A)")
const persona = {
    nombre: "Juan",
    edad: 30,
};
const { nombre, edad } = persona;
console.log (nombre)
console.log (edad)
console.log ("B)")
const obtenerPropiedades = ({ nombre, edad }) => {
    return `Nombre: ${nombre}, Edad: ${edad}`;
}
console.log (obtenerPropiedades(persona))
console.log ("C)")

