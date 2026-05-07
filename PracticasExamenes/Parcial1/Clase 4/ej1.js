console.log("Practica Clase 3 - Guia de ejercicios ES6");
console.log("Ejercicio 8: Destructuring");
console.log(`Ejercicio 1: Mostrar Títulos de alguna información obtenida
Usa fetch para obtener los títulos de los 10 primeros de alguna de las APIs y mostrar en la
consola.
Resultado Esperado: Deberías ver una lista en la consola.`);
async function obtenerPersonajes() {
    try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");
        const datos = await respuesta.json();
        const personajes = datos.results;
        personajes.slice(0, 10).forEach(personaje => {
            console.log(personaje.name);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}
obtenerPersonajes();