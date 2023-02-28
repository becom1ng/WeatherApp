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

// fetch takes in an endpoint / url
function fetchWeather(zip) {
  var fetchURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=fd7bb1c5117b8de8488094b4094e66e4&units=imperial`
  console.log(fetchURL);
  
  fetch(fetchURL)
    .then(response => response.json())
    .then(data => console.log(data));
}

fetchWeather(63119);