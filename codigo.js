const claveApi = '81ccef46a2b446fc93712759252209';
const idioma = 'es';
const inpCiudad = document.getElementById('input-ciudad');

async function obtenerclima() {
    
    const ciudad = inpCiudad.value;

    if (!cuidad) {
        alert('Por favor, ingresa una ciudad');
        return;
    }

    const apiclimaactual = `http://api.weatherapi.com/v1/current.json?q=${cuidad}&lang=${idioma}&key=${claveapi}`;

    const response = await fetch(apiclimaactual);
    const data = await response.json();

    mostrarclima(data);
}

function mostrarclima(data) {
    document.querySelector('.clima-icono').src = data.current.condition.icon;
    document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
    document.querySelector('.temp').innerHTML = data.current.temp_c + '°C';
    document.querySelector('.ciudad').innerHTML = data.location.name;
    document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
    document.querySelector('.viento').innerHTML = data.current.wind_kph + 'km/h';
}

    