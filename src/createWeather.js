import { getWeather } from "./getWeather";
import { getFutureForcast } from "./getWeather";

const aContainer = document.querySelector('.container');

export function createWeatherOnPage(baltimoreWeatherData) {
    getLocation(baltimoreWeatherData);
    getTime(baltimoreWeatherData);
    tempature(baltimoreWeatherData);
    feelsLike(baltimoreWeatherData);
    humidity(baltimoreWeatherData);
}

function getLocation(baltimoreWeatherData) {
    const country = document.createElement("h1");
    const area = document.createElement("h2");
    const state = document.createElement("h2");

    country.classList.add('country');
    area.classList.add('area');
    state.classList.add('state');

    country.textContent = `${baltimoreWeatherData.location.country}`;
    area.textContent = `${baltimoreWeatherData.location.name}`;
    state.textContent = `${baltimoreWeatherData.location.region}`;

    aContainer.appendChild(country);
    aContainer.appendChild(state);
    aContainer.appendChild(area);
}

function getTime(baltimoreWeatherData) {
    const localTime = document.createElement("h2");
    localTime.classList.add('localTime');
    localTime.textContent = `${baltimoreWeatherData.location.localtime}`;
    aContainer.appendChild(localTime);
}

function tempature(baltimoreWeatherData) {
    const temp = document.createElement("h2");
    temp.classList.add('temp');
    temp.textContent = `${baltimoreWeatherData.current.temp_f}°F`;
    aContainer.appendChild(temp);
}

function humidity(baltimoreWeatherData) {
    const humidity = document.createElement("h2");
    humidity.classList.add('humidity');
    humidity.textContent = `Humidity Level: ${baltimoreWeatherData.current.humidity}`;
    aContainer.appendChild(humidity);
}

function feelsLike(baltimoreWeatherData) {
    const feelsTemp = document.createElement("h2");
    feelsTemp.classList.add('feelsTemp');
    feelsTemp.textContent = `Feels like: ${baltimoreWeatherData.current.feelslike_f}°F`;
    aContainer.appendChild(feelsTemp);
}
