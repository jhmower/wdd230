let currentConditionsURL = "https://api.openweathermap.org/data/2.5/weather?lat=33.15&lon=-117.35&appid=ae3f38095e2dd7b93c364f6048ac73f0&units=imperial"
let futureConditionsURL = "https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=-117.35&appid=ae3f38095e2dd7b93c364f6048ac73f0&units=imperial"
let futureForcast = []
let futureForcast3 = []
let forecastIndex = 0
let weatherSection = document.querySelector('#weather')

function convertUnix(unix_timestamp) {
    const date = new Date(unix_timestamp * 1000)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekDay = days[date.getDay()]
    return weekDay
}


function processForcastDays(day) {
    if (futureForcast == 8){
        const day1Title = document.getElementById("day-1-title")
        const day1Temp = document.getElementById("day-1-temp")
        const day1Icon = document.getElementById("day-1-condition-icon")
        const day1IconSrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;

        day1Title.innerHTML = `${convertUnix(day.dt)}`
        day1Temp.innerHTML = `${day.main.temp.toFixed(0)}&deg; F`
        day1Icon.setAttribute('src', day1IconSrc)
        day1Icon.setAttribute('alt', day.weather[0].description) 
    } else if (futureForcast == 16) {
        const day2Title = document.getElementById("day-2-title")
        const day2Temp = document.getElementById("day-2-temp")
        const day2Icon = document.getElementById("day-2-condition-icon")
        const day2IconSrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;

        day2Title.innerHTML = `${convertUnix(day.dt)}`
        day2Temp.innerHTML = `${day.main.temp.toFixed(0)}&deg; F`
        day2Icon.setAttribute('src', day2IconSrc)
        day2Icon.setAttribute('alt', day.weather[0].description) 

    } else if (futureForcast == 24) {
        const day3Title = document.getElementById("day-3-title")
        const day3Temp = document.getElementById("day-3-temp")
        const day3Icon = document.getElementById("day-3-condition-icon")
        const day3IconSrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
    
        day3Title.innerHTML = `${convertUnix(day.dt)}`
        day3Temp.innerHTML = `${day.main.temp.toFixed(0)}&deg; F`
        day3Icon.setAttribute('src', day3IconSrc)
        day3Icon.setAttribute('alt', day.weather[0].description) 

    }
    futureForcast ++
}

function processWeather(todaysWeather) {
    const currentTemp = document.getElementById("current-temp")
    const description = document.getElementById("current-description")
    const conditionIcon = document.getElementById("condition-icon")
    const currentIcon = `https://openweathermap.org/img/w/${todaysWeather.weather[0].icon}.png`;
    const currentHumidity = document.getElementById("current-humidity")

    currentTemp.innerHTML = `${todaysWeather.main.temp.toFixed(0)}&deg; F `
    description.innerHTML = `${todaysWeather.weather[0].description.toUpperCase()}`
    currentHumidity.innerHTML = `Humidity: ${todaysWeather.main.humidity}%`
    conditionIcon.setAttribute('src', currentIcon)
    conditionIcon.setAttribute('alt', todaysWeather.weather[0].description)  
}


async function futureapiFetch() {
    try {
        const reply = await fetch(futureConditionsURL);
        if (reply.ok) {
            const jsonObject = await reply.json();
            jsonObject.list.forEach(processForcastDays)
        } else {
            throw Error(await reply.text());
        }
    } catch (error) {
        console.log(error);
    }
}


async function currentapiFetch() {
    try {
        const reply = await fetch(currentConditionsURL);
        if (reply.ok) {
            const jsonObject = await reply.json();
            processWeather(jsonObject)
        } else {
            throw Error(await reply.text());
        }
    } catch (error) {
        console.log(error);
    }
}


futureapiFetch()
currentapiFetch()