const claveApi = "a51f05b8b5494319add222836252109"; 
const idioma = "es-ES";
const cuidad = "huancayo";

const apiclimaactual = 'http://api.weatherapi.com/v1/current.json?key=a51f05b8b5494319add222836252109&q=huancayo&aqi=no'

const response = await fetch(apiclimaactual);
let data = await response.json();

console.log(data);