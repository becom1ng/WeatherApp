// <!-- Get default location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

function showPosition(position) {
  var fetchURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=fd7bb1c5117b8de8488094b4094e66e4&units=imperial`
  doFetch(fetchURL);
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log('User denied the request for Geolocation.')
      break;
    case error.POSITION_UNAVAILABLE:
      console.log('Location information is unavailable.')
      break;
    case error.TIMEOUT:
      console.log('The request to get user location timed out.')
      break;
    case error.UNKNOWN_ERROR:
      console.log('An unknown error occurred.')
      break;
  }
} 

// getLocation(); // Request location of browser

// Fetch weather data and pass to update function
function doFetch(fetchURL) {
  fetch(fetchURL)
    .then(response => response.json())
    .then(data => displayWeather(data));
}

// Update page to display weather
function displayWeather(weather) {
  var elemTemp = document.getElementById('temperature')
  var elemFeelsLike = document.getElementById('feelsLike')
  var elemConditions = document.getElementById('conditions')
  var elemWind = document.getElementById('wind')
  var elemWeatherIcon = document.getElementById('weatherIcon')
  var elemCurrentDisplay = document.getElementById('currentDisplay')

    function getCardinalDirection(angle) {
      const directions = ['N ↑', 'NE ↗', 'E →', 'SE ↘', 'S ↓', 'SW ↙', 'W ←', 'NW ↖'];
      return directions[Math.round(angle / 45) % 8];
    }

  elemCurrentDisplay.innerText = weather.name  
  elemTemp.innerText = Math.round(weather.main.temp);
  elemFeelsLike.innerText = Math.round(weather.main.feels_like);
  elemConditions.innerText = weather.weather[0].main;
  elemWeatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" height="120px"></img>`;
  elemWind.innerText = Math.round(weather.wind.speed) + " " + getCardinalDirection(weather.wind.deg);
}

function fetchClick() {
  var inputRequest = document.getElementById('weatherRequest');
  console.log(inputRequest.value);
  
  // if inputRequest is ##### then fetchWeather(inputRequest)
  // if inputRequest is string, then split into city name and state
  //    like pop last 2 characters of the string for state
  //    then delete and ,
  //    pass remaining as city name + state extracted earlier
}

// for testing purpose via console
function fetchWeather(zip) {
  var fetchURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=fd7bb1c5117b8de8488094b4094e66e4&units=imperial`
  doFetch(fetchURL);
}

// Sample weather JSON - PLACEHOLDER TO GENERATE DEFAULT VALUES
// var testweather = {
//   "coord": {
//     "lon": -90.3283,
//     "lat": 38.6007
//   },
//   "weather": [
//     {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01n"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 56.32,
//     "feels_like": 54.7,
//     "temp_min": 52.83,
//     "temp_max": 58.42,
//     "pressure": 1006,
//     "humidity": 65
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 16.11,
//     "deg": 100
//   },
//   "clouds": {
//     "all": 0
//   },
//   "dt": 1677630197,
//   "sys": {
//     "type": 2,
//     "id": 2008299,
//     "country": "US",
//     "sunrise": 1677587728,
//     "sunset": 1677628359
//   },
//   "timezone": -21600,
//   "id": 4397042,
//   "name": "Maplewood",
//   "cod": 200
// }

// displayWeather(testweather);