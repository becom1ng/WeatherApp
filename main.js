// Get default location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

function showPosition(position) {
  console.log('Latitude: ' + position.coords.latitude + ' Longitude: ' + position.coords.longitude);
  console.log(`Default fetchURL =  https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=fd7bb1c5117b8de8488094b4094e66e4&units=imperial`);
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

getLocation();

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
  "wind": {
     "speed": 0.47,
     "deg": 107.538
   },
   "main": {
     "temp": 59,
     "humidity": 43
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

displayWeather(testweather);