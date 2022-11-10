let windchillHTML = document.getElementById("windchill");
let tempHTML = document.getElementById("temp");
let windSpeedHTML = document.getElementById("wind");
let temp = tempHTML.textContent;
let windSpeed = windSpeedHTML.textContent;

if (temp <= 50 && windSpeed >3.0) {
    f = 35.74 + (0.6215*temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275*temp*(windSpeed ** 0.16))
    windchillDisplay = f.toFixed(1)
    windchillHTML.textContent = `Windchill: ${windchillDisplay}`
} else {
    windchillHTML.textContent = "Windchill: N/A"
}