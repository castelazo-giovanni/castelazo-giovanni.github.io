let weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=c20a9a0bba06a3103f735c16364790f3";
weatherRequest.open("GET", apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
  let weatherData = JSON.parse(weatherRequest.responseText);
    var convertKelvin = (9/5) * (weatherData.main.temp - 273) + 32;
    convertKelvin = convertKelvin.toFixed(2);
    document.getElementById('current-temp').innerHTML = convertKelvin;
}