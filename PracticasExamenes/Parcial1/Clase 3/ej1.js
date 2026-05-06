console.log("Practica Clase 3 - Guia de ejercicios ES6");
console.log("Ejercicio 1: let vs const");
console.log("a) let vs const - variables")
let edad = 25;
const edadConstante = 30;
edad = 26; // Esto funciona porque 'edad' fue declarada con 'let'
try {
    edadConstante = 31; // 'edadConstante no se puede reasignar
} catch (error) {
    console.log("Error al reasignar valor a 'edadConstante':", error.message);
}
console.log("b) let vs const - bucles")
for (let i = 0; i < 3; i++) {
    console.log("iteracion:", i);
}
try { for (const j = 0; j < 3; j++) {
    console.log("iteracion: ", j);
}
}catch (error) {
    console.log("Error al acceder a 'i' fuera del bucle:", error.message);
}
console.log("c) let vs const - objetos")
const persona = {
    nombre: "Juan",
    edad: 25
};
try {    persona = { nombre: "Maria", edad: 30 }; // Esto no funciona porque 'persona' es una constante
} catch (error) {
    console.log("Error al reasignar valor a 'persona':", error.message);
}
function varLetConst() {
    var variableVar = "Soy var";
    let variableLet = "Soy let";
    const variableConst = "Soy const";
    if (true) {
        var variableVar = "var dentro del bloque";
        let variableLet = "let dentro del bloque";
        const variableConst = "const dentro del bloque";

        console.log("Dentro del bloque:");
        console.log(variableVar);
        console.log(variableLet);
        console.log(variableConst);
    }
    console.log("Fuera del bloque:");
    console.log(variableVar);
    console.log(variableLet);
    console.log(variableConst);
}
varLetConst();