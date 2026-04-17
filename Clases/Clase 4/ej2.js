console.log ("Practica - Clase 4")
console.log ("-".repeat(100))
console.log ("Ejercicio 1: Mostrar Títulos de alguna información obtenida")
const axios = require("axios");

axios.delete("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    console.log("Post eliminado correctamente");
    console.log("Status:", response.status);
    console.log("Data:", response.data);
  })
  .catch(error => {
    console.error("Error al eliminar el post:", error);
  });