// Define elements to be changed by weather display
const elemTemp = document.getElementById('temperature')
const elemFeelsLike = document.getElementById('feelsLike')
const elemConditions = document.getElementById('conditions')
const elemWind = document.getElementById('wind')
const elemWeatherIcon = document.getElementById('weatherIcon')
const elemCurrentDisplay = document.getElementById('currentDisplay')
const inputRequest = document.getElementById('weatherRequest');

// Fetch weather data and pass to update function
function doFetch(fetchURL) {
  fetch(fetchURL)
    .then(response => response.json())
    .then(data => displayWeather(data));
  inputRequest.value = ''
}

// Update page to display weather
function displayWeather(weather) {

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
  if (inputRequest.value.trim() === "") { return }

  const isZip = Number(inputRequest.value)

  if (Number.isNaN(isZip)) {
    prepCityState(inputRequest.value)  //  NOT A NUMBER
  } else {
    prepZip(isZip)  // IS A NUMBER
  }
}

function prepZip(zip) {  
  if (zip.toString().length < 5) {
      return  // *** Consider adding error/alert feedback
    } else {
      var zipSearch = zip.toString().slice(0,5);
      var fetchURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipSearch},us&appid=fd7bb1c5117b8de8488094b4094e66e4&units=imperial`;
      doFetch(fetchURL);
    } 

  //zip.slice(0,5)   // THIS IS WHERE I AM WORKING RIGHT NOW
}

function prepCityState(city) {
  if (city.includes(",")) {
    var data1 = city.replace(",", "");

  } else {
    var fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=fd7bb1c5117b8de8488094b4094e66e4&units=imperial`
    console.log(fetchURL);
    
    //doFetch(fetchURL);
    //inputRequest.value = '';
  }
}

// Get default location
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