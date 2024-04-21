import { style } from "./style.css"
import { getWeather } from "./getWeather"
import { getFutureForcast } from "./getWeather";
import { createWeatherOnPage } from "./createWeather";
import { getDailyWeather } from "./futureWeather";
const inputForm = document.querySelector('.userForm')
const userInputForm = document.querySelector('.userInput');
const userSubmit = document.querySelector('.userSubmit');
function getUserInput() {
    userSubmit.addEventListener('click', function(event){
    event.preventDefault();
    inputForm.classList.add('hide');
    const userInput = userInputForm.value;
    init(userInput);
    })
}

async function init(userInput) {
    const baltimoreWeatherData = await getWeather(userInput);
    const futureWeatherData = await getFutureForcast(userInput);
    function confirmCurrentWeather() {
    if (baltimoreWeatherData) {
        createWeatherOnPage(baltimoreWeatherData);
    } else {
        console.error('Failed to fetch or process weather data.');
    }

}
function confirmFutureWeather() {
    if (futureWeatherData) {
        getDailyWeather(userInput);
    } else {
        console.error('Failed to fetch or process future weather data.')
    }
}
confirmCurrentWeather();
confirmFutureWeather();
}

getUserInput();