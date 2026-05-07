console.log(`Parcial 1 PNT2 7/5/26 Matias Corrales
Dar un ejemplo de cada uno:
1.find()
2.some()
3.every()
4.includes()
5.sort()`);
console.log("-".repeat(100));
console.log(`1.find() `);
const numeros = [1, 2, 3, 4, 5,6,7,8,9,10];
const numeroMayorQueTres = numeros.find(num => num > 3);
console.log("Número mayor que 3:", numeroMayorQueTres);
console.log(`2.some() `);
const tieneNumeroMayorQueCuatro = numeros.some(num => num > 4);
console.log("¿Hay algún número mayor que 4?", tieneNumeroMayorQueCuatro);
console.log(`3.every() `);
const todosSonMenoresQueSeis = numeros.every(num => num < 6);
console.log("¿Todos los números son menores que 6?", todosSonMenoresQueSeis);
console.log(`4.includes() `);
const incluyeTres = numeros.includes(3);
console.log("¿El array incluye el número 3?", incluyeTres);
console.log(`5.sort() `);
const numerosDesordenados = [5, 2, 9, 1, 5, 6];
numerosDesordenados.sort((a, b) => a - b);
console.log("Números ordenados:", numerosDesordenados);