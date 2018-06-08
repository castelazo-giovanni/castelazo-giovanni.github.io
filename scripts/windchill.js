var t = (parseFloat(document.getElementById('highTemp').innerHTML) + parseFloat(document.getElementById('lowTemp').innerHTML)) / 2;

var s = parseFloat(document.getElementById('windSpeed').innerHTML);

var f = (35.75 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16))).toFixed(2);

document.getElementById('windChill').innerHTML = "<strong>" + f + "&degF </strong>";
