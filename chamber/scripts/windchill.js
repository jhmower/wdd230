let windchillHTML = document.getElementById("windchill")

let temp = 0;
let windSpeed = 0;

if (temp <= 50 && windSpeed >3.0) {
    f = 35.74 + (0.6215*temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275*temp*(windSpeed ** 0.16))
    // windchillHTML.textContent = f
    windchillHTML.textContent = "Windchill: N/A"
} else {
    windchillHTML.textContent = "Windchill: N/A"
}