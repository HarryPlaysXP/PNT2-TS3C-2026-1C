console.log ("Practica - Clase 4")
console.log ("-".repeat(100))
console.log ("Ejercicio 3: Listar Álbumes de Fotos")

fetch("https://jsonplaceholder.typicode.com/albums?userId=1")
  .then(res => res.json())
  .then(data => {
    let personajes = data.results.slice(0, 10);

    personajes.forEach(p => {
      console.log(p.name);
    });
  })
  .catch(error => console.log(error));