import { style } from "./style.css"
import { getWeather } from "./getWeather"
import { getFutureForcast } from "./getWeather";
import { createWeatherOnPage } from "./createWeather";
import { getDailyWeather } from "./futureWeather";
async function init() {
    const baltimoreWeatherData = await getWeather();
    const futureWeatherData = await getFutureForcast();
    function confirmCurrentWeather() {
    if (baltimoreWeatherData) {
        createWeatherOnPage(baltimoreWeatherData);
    } else {
        console.error('Failed to fetch or process weather data.');
    }
}
function confirmFutureWeather() {
    if (futureWeatherData) {
        getDailyWeather(getFutureForcast);
    } else {
        console.error('Failed to fetch or process future weather data.')
    }
}
confirmCurrentWeather();
confirmFutureWeather();
}
init();