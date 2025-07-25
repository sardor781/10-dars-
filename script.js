const container = document.querySelector('.container')
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const weatherInfo = document.querySelector('.weather-info')

btn.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=0242d4f7851ccccfdbb0a28e691998f8&units=metric`)
        .then((res) => res.json())
        .then((data) => {
            weatherInfo.innerHTML = `
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
                <h2>${data.name}</h2>
                <p>${data.weather[0].main}</p>
                <p>Temp: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind: ${data.wind.speed} m/s</p>
            `
        })
})