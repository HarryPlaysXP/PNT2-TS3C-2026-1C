console.log ("Guia de ejercicios ES6")
console.log ("-".repeat(100))
console.log ("-Ejercicio 7 - Spread Operator")
console.log ("A)")
const sumar = (...numeros) => numeros.reduce((acum, n) => acum + n, 0);
console.log(sumar(1, 2, 3, 4, 5,7,8,9,10));
console.log ("B)")
const numeroMax = [1, 2, 3, 4, 5,7,8,9,10];
console.log(Math.max(...numeroMax));
console.log ("C)")
const persona = {
    nombre: "Juan",
    edad: 30,
}
const auto = {
    marca: "Mazda",
    modelo: "Miata MX-5",
}
const personaAuto = {...persona, ...auto};
console.log(personaAuto);
console.log ("D)")
let arr = [1, [2, 3], [4]];
let plano = [].concat(...arr);
console.log(plano);