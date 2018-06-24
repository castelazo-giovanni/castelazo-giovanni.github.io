let weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=c20a9a0bba06a3103f735c16364790f3";
weatherRequest.open("GET", apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
  let weatherData = JSON.parse(weatherRequest.responseText);
    
    var t = (weatherData.main.temp_max + weatherData.main.temp_min) / 2;
    var s = weatherData.wind.speed;
    var f = (35.75 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16))).toFixed(2);
    //convertLow = convertLow.toFixed(2);
    
    document.getElementById('weatherIcon').innerHTML = "<img src=\'http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png' alt='Franklin City Center' width='150'><br>";
    document.getElementById('conditions').innerHTML = "<strong>" + weatherData.weather[0].description + " </strong>";
    document.getElementById('current-temp').innerHTML = "<strong>" + weatherData.main.temp + "&degF </strong>";    
    document.getElementById('highTemp').innerHTML = "<strong>" + weatherData.main.temp_max + "&degF </strong>";
    document.getElementById('lowTemp').innerHTML = "<strong>" + weatherData.main.temp_min + "&degF </strong>";
    document.getElementById('windSpeed').innerHTML = "<strong>" + weatherData.wind.speed + " mph </strong>";
    document.getElementById('windChill').innerHTML = "<strong>" + f + "&degF </strong>";
}