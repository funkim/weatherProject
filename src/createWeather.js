import { getWeather } from "./getWeather";

export function createWeatherOnPage(baltimoreWeatherData) {
    tempature(baltimoreWeatherData)
    feelsLike(baltimoreWeatherData);
}


function tempature(baltimoreWeatherData) {
    const temp = document.createElement("h2");
    temp.textContent = `${baltimoreWeatherData.current.temp_f}°F`;
    document.body.appendChild(temp);
    console.log(temp.textContent);
}

function feelsLike(baltimoreWeatherData) {
    const feelsTemp = document.createElement("h2");
    feelsTemp.textContent = `Feels like: ${baltimoreWeatherData.current.feelslike_f}°F`;
    document.body.appendChild(feelsTemp);
    console.log(feelsTemp.textContent);
}
