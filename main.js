// <!-- Get default location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

function showPosition(position) {
  console.log('Latitude: ' + position.coords.latitude + ' Longitude: ' + position.coords.longitude);
  var fetchURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=fd7bb1c5117b8de8488094b4094e66e4&units=imperial`
  console.log(fetchURL);
  
//  fetch(fetchURL)
//    .then(response => response.json())
//    .then(data => console.log(data));
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

//getLocation();

// End default location -->

// fetch takes in an endpoint / url
function fetchWeather(zip) {
  var fetchURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=fd7bb1c5117b8de8488094b4094e66e4&units=imperial`
  console.log(fetchURL);
  
//  fetch(fetchURL)
//    .then(response => response.json())
//    .then(data => console.log(data));
}

// fetchWeather(63119); // Get weather from zip




// Sample weather JSON - PLACEHOLDER TO GENERATE DEFAULT VALUES
var testweather = {
  "coord": {
    "lon": -90.3283,
    "lat": 38.6007
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 56.32,
    "feels_like": 54.7,
    "temp_min": 52.83,
    "temp_max": 58.42,
    "pressure": 1006,
    "humidity": 65
  },
  "visibility": 10000,
  "wind": {
    "speed": 16.11,
    "deg": 100
  },
  "clouds": {
    "all": 0
  },
  "dt": 1677630197,
  "sys": {
    "type": 2,
    "id": 2008299,
    "country": "US",
    "sunrise": 1677587728,
    "sunset": 1677628359
  },
  "timezone": -21600,
  "id": 4397042,
  "name": "Maplewood",
  "cod": 200
}

// Destructuring
//const { main: { temp } } = testweather
//console.log(temp);
//
// Array of objects
// console.log(testweather[1].temp);


function displayWeather(weather) {
var elemTemp = document.getElementById('temperature')
var elemHConditions = document.getElementById('conditions')
var elemWind = document.getElementById('wind')
elemTemp.innerText = weather.main.temp;
elemHumidity.innerText = weather.main.humidity;
elemWind.innerText = weather.wind.speed;
}

displayWeather(testweather);