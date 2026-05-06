console.log("Practica Clase 3 - Guia de ejercicios ES6");
console.log("Ejercicio 3: Objetos y cómo acceder a las propiedades");
console.log("a) crear un objeto libro y acceder a propiedades");
const libro = {
    título: "Mil leguas de viaje submarino",
    autor: "Julio Verne",
    año: 1896
};
console.log("Titulo del libro:", libro.título);
console.log("Autor del libro:", libro.autor);
console.log("Año del libro:", libro.año);
console.log("b) dado un objeto persona, agregar una nueva propiedad y modificar otra");
const persona = {
    nombre: "Juan",
    edad: 30
};
persona.hobby = "futbol";
persona.edad = 31;
console.log("Persona:", persona);
console.log("c) crea objeto calculadora con métodos para sumar, restar, multiplicar y dividir");
const calculadora = {
  num1: 0,
  num2: 0,
  setNumeros(a, b) {
    this.num1 = a;
    this.num2 = b;
  },
  sumar() {
    return this.num1 + this.num2;
  },
  restar() {
    return this.num1 - this.num2;
  },
  multiplicar() {
    return this.num1 * this.num2;
  },
  dividir() {
    return this.num2 !== 0 ? this.num1 / this.num2 : "Error: división por cero";
  }
};
calculadora.setNumeros(10, 5);
console.log("Números establecidos:", calculadora.num1, " y ", calculadora.num2);
console.log("Suma:", calculadora.sumar());
console.log("Resta:", calculadora.restar());
console.log("Multiplicación:", calculadora.multiplicar());
console.log("División:", calculadora.dividir());
console.log("d) Destructuring - Dado un objeto accedemos a sus propiedades con variables con el mismo nombre");
const persona2 = {
    nombre: "Maria",
    edad: 25,
    ciudad: "Buenos Aires"
};
const { nombre, edad, ciudad } = persona2;
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);