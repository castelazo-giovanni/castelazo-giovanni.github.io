let weatherRequest = new XMLHttpRequest();
var apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";
weatherRequest.open("GET", apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
  let weatherData = JSON.parse(weatherRequest.responseText);
    document.getElementById('franklinMotto').innerHTML = weatherData.towns[0].motto;
    document.getElementById('franklinYearFounded').innerHTML = weatherData.towns[0].yearFounded;    
    document.getElementById('franklinPopulation').innerHTML = weatherData.towns[0].currentPopulation;
    document.getElementById('franklinAnnualRainfall').innerHTML = weatherData.towns[0].averageRainfall;

    document.getElementById('greenvilleMotto').innerHTML = weatherData.towns[1].motto;
    document.getElementById('greenvilleYearFounded').innerHTML = weatherData.towns[1].yearFounded;    
    document.getElementById('greenvillePopulation').innerHTML = weatherData.towns[1].currentPopulation;
    document.getElementById('greenvilleAnnualRainfall').innerHTML = weatherData.towns[1].averageRainfall;

    document.getElementById('springfieldMotto').innerHTML = weatherData.towns[3].motto;
    document.getElementById('springfieldYearFounded').innerHTML = weatherData.towns[3].yearFounded;    
    document.getElementById('springfieldPopulation').innerHTML = weatherData.towns[3].currentPopulation;
    document.getElementById('springfieldAnnualRainfall').innerHTML = weatherData.towns[3].averageRainfall;

}