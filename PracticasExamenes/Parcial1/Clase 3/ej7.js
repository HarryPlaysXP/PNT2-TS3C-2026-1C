console.log("Practica Clase 3 - Guia de ejercicios ES6");
console.log("Ejercicio 7: Spread Operator");
console.log("a) Crea una función que reciba un número indefinido de argumentos y devuelva la suma de todos ellos usando el spread operator '...'.");
const sumaIndefinida = (...numeros) => numeros.reduce((acum, valor) => acum + valor,0);
console.log(`la suma es: ${sumaIndefinida(1,2,3,4)}`)
console.log(`b) Dado un array de números, usa el spread operator para encontrar el número máximo.`)
const numeros = [1,2,3,4,5,6,7,8,9,10];
const mayor = Math.max(...numeros);
console.log(mayor)
console.log(`c) Combina dos objetos en uno solo utilizando el spread operator.`)
//uso const del ejercico anterior
const nums = [2145,234,4]
const combinado = [...nums, ...numeros];
console.log(combinado)
const persona = {
    nombre: "Juan",
    edad: 25
};
const contacto = {
    email: "juan@gmail.com",
    telefono: "123456789"
};
const personaCompleta = {
    ...persona,
    ...contacto
};
console.log(personaCompleta);
console.log(`d) Tenemos un array con subarrays (por ejemplo: [1, [2, 3], [4]]). Usamos el spread
operator para combinar todo en un solo array plano.(tip: no alcanza solo con spread)`)
const array = [1, [2, 3], [4]];
const plano = [].concat(...array);
// tambien puede ser "const plano = array.flat();"
console.log(plano);