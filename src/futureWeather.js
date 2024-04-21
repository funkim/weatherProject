import { getFutureForcast } from "./getWeather";

const aContainer = document.querySelector('.container');

export async function getDailyWeather(userInput) {
    const futureWeatherData = await getFutureForcast(userInput);
    const sevenDayContainer = document.createElement('div') 
    sevenDayContainer.classList.add('futureForecast')
    aContainer.appendChild(sevenDayContainer)
    function eachDay(dateDisplayed , date, tempatureLow , tempatureHigh, classOfDay) {
        date = document.createElement("div");
        date.classList.add(classOfDay)
        sevenDayContainer.appendChild(date);
        let showDate = document.createElement('h3')
        let tempatureShowLow = document.createElement('p');
        let tempatureShowHigh = document.createElement('p')
        date.appendChild(showDate)
        date.appendChild(tempatureShowLow);
        date.appendChild(tempatureShowHigh);
        showDate.textContent = `${dateDisplayed}`
        tempatureShowLow.textContent = `${tempatureLow}°F`
        tempatureShowHigh.textContent = `${tempatureHigh}°F`
    }
    for (let i = 1; i < 7; i++) {
        let dayCount = i.toString();
    eachDay(futureWeatherData.forecast.forecastday[i].date, dayCount, futureWeatherData.forecast.forecastday[i].day.mintemp_f,futureWeatherData.forecast.forecastday[i].day.maxtemp_f, dayCount )
    }
}