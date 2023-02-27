// Sample weather JSON
var weather = {
    "wind": {
       "speed": 0.47,
       "deg": 107.538
     },
     "main": {
       "temp": 98,
       "humidity": 93
     }
}

function displayWeather(weather) {
  var elemTemp = document.getElementById('temperature')
  var elemHumidity = document.getElementById('humidity')
  var elemWind = document.getElementById('wind')
  elemTemp.innerText = weather.main.temp;
  elemHumidity.innerText = weather.main.humidity;
  elemWind.innerText = weather.wind.speed;
}

displayWeather(weather);