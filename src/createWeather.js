import { getWeather } from "./getWeather";

export function createWeatherOnPage(baltimoreWeatherData) {
    getLocation(baltimoreWeatherData)
    getTime(baltimoreWeatherData)
    tempature(baltimoreWeatherData)
    feelsLike(baltimoreWeatherData);
    humidity(baltimoreWeatherData)
}

function getLocation(baltimoreWeatherData) {
    const country = document.createElement("h1");
    const area = document.createElement("h2");
    const state = document.createElement("h2");
    country.textContent = `${baltimoreWeatherData.location.country}`;
    area.textContent = `${baltimoreWeatherData.location.name}`;
    state.textContent = `${baltimoreWeatherData.location.region}`;
    document.body.appendChild(country);
    document.body.appendChild(state);
    document.body.appendChild(area);
    console.log(country.textContent);
}

function getTime(baltimoreWeatherData) {
    const localTime = document.createElement("h2")
    localTime.textContent = `${baltimoreWeatherData.location.localtime}`
    document.body.appendChild(localTime);
}

function tempature(baltimoreWeatherData) {
    const temp = document.createElement("h2");
    temp.textContent = `${baltimoreWeatherData.current.temp_f}°F`;
    document.body.appendChild(temp);
    console.log(temp.textContent);
}
function humidity(baltimoreWeatherData) {
    const humidity = document.createElement("h2");
    humidity.textContent = `Humidity Level: ${baltimoreWeatherData.current.humidity}`;
    document.body.appendChild(humidity);
    console.log(humidity.textContent);
}
function feelsLike(baltimoreWeatherData) {
    const feelsTemp = document.createElement("h2");
    feelsTemp.textContent = `Feels like: ${baltimoreWeatherData.current.feelslike_f}°F`;
    document.body.appendChild(feelsTemp);
    console.log(feelsTemp.textContent);
}
