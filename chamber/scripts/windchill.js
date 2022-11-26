
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windchillHTML = document.querySelector('#windchill');
const windSpeedHTML = document.querySelector('#windspeed');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=ae3f38095e2dd7b93c364f6048ac73f0&units=imperial';

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc.toUpperCase();
  windSpeedHTML.textContent = `Windspeed: ${weatherData.wind.speed} mph`;

}

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

let temp = currentTemp.textContent;
let windSpeed = windSpeedHTML.textContent;

if (temp <= 50 && windSpeed >3.0) {
    f = 35.74 + (0.6215*temp) - (35.75 * (windSpeed ** 0.16)) + (0.4275*temp*(windSpeed ** 0.16))
    windchillDisplay = f.toFixed(1)
    windchillHTML.textContent = `Windchill: ${windchillDisplay}&deg;F`
} else {
    windchillHTML.textContent = "Windchill: N/A"
}
