const claveApi = "81ccef46a2b446fc93712759252209";
const idioma = "es-ES";
const cuidad = "huancayo";

const apiclimaactual = 'http://api.weatherapi.com/v1/current.json?key=81ccef46a2b446fc93712759252209&q=huancayo&aqi=no'

const response = await fetch(apiclimaactual);
let data = await response.json();

console.log(data.current.condition);