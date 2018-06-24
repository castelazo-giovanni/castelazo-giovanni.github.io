let townRequest = new XMLHttpRequest();
var apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";
townRequest.open("GET", apiURL, true);
townRequest.send();
townRequest.onload =  function () {
  let townData = JSON.parse(townRequest.responseText);
    document.getElementById('franklinMotto').innerHTML = townData.towns[0].motto;
    document.getElementById('franklinYearFounded').innerHTML = townData.towns[0].yearFounded;    
    document.getElementById('franklinPopulation').innerHTML = townData.towns[0].currentPopulation;
    document.getElementById('franklinAnnualRainfall').innerHTML = townData.towns[0].averageRainfall;

    document.getElementById('greenvilleMotto').innerHTML = townData.towns[1].motto;
    document.getElementById('greenvilleYearFounded').innerHTML = townData.towns[1].yearFounded;    
    document.getElementById('greenvillePopulation').innerHTML = townData.towns[1].currentPopulation;
    document.getElementById('greenvilleAnnualRainfall').innerHTML = townData.towns[1].averageRainfall;

    document.getElementById('springfieldMotto').innerHTML = townData.towns[3].motto;
    document.getElementById('springfieldYearFounded').innerHTML = townData.towns[3].yearFounded;    
    document.getElementById('springfieldPopulation').innerHTML = townData.towns[3].currentPopulation;
    document.getElementById('springfieldAnnualRainfall').innerHTML = townData.towns[3].averageRainfall;

}