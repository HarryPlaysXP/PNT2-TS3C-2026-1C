console.log("Practica Clase 3 - Guia de ejercicios ES6");
console.log("Ejercicio 4: Template Literals");
console.log("a) Usando template literals, crea una cadena que incluya variables para tu nombre, edad y profesión.");
const nombre = "Juan";
const edad = 30;
const profesion = "Desarrollador";
const presentacion = `Hola, mi nombre es ${nombre}, tengo ${edad} años y soy ${profesion}.`;
console.log(presentacion);
console.log("b)Crea una función que reciba un precio y una cantidad, y devuelva una frase usando cálculos. La frase es “El total es: [total]“");
const calcularTotal = (precio, cantidad) => {
    const total = precio * cantidad;
    return `El total es: ${total}`;
};
console.log(calcularTotal(10, 5));
console.log("c) Utiliza template literals para crear un mensaje de error que incluya el nombre del error y su descripción.");
const errorName = "Error de conexión";
const errorDescription = "No se pudo conectar al servidor.";
const errorMessage = `Error: ${errorName} - ${errorDescription}`;
console.log(errorMessage);