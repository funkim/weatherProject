import { style } from "./style.css"
import { getWeather } from "./getWeather"
import { createWeatherOnPage } from "./createWeather";
async function init() {
    const baltimoreWeatherData = await getWeather();
    if (baltimoreWeatherData) {
        createWeatherOnPage(baltimoreWeatherData);
    } else {
        console.error('Failed to fetch or process weather data.');
    }
}
init();