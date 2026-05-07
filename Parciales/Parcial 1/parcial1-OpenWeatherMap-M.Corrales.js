console.log(`Parcial 1 PNT2 7/5/26 Matias Corrales
Usando Postman o JavaScript:
Realizar una petición GET a OpenWeatherMap. 
Mostrar: temperatura, humedad, descripción del clima
Ejemplo de endpoint: 
https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=TU_API_KEY&units=metric&lang=es`);
console.log("-".repeat(100));
async function obtenerClima() {
    const apiKey = "281596c6f9d94e02e43bc0bb01661750";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=${apiKey}&units=metric&lang=es`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(`Código: ${datos.cod}`);// Mostrar el código de respuesta dado que s epregunta en el examen
    console.log("Temperatura:", datos.main.temp, "°C");
    console.log("Humedad:", datos.main.humidity, "%");
    console.log("Clima:", datos.weather[0].description);
}
obtenerClima();