import { getFutureForcast } from "./getWeather";

const aContainer = document.querySelector('.container');

export function showDailyWeather() {
    const sevenDayContainer = document.createElement('div') 
    sevenDayContainer.classList.add('futureForecast')
    aContainer.appendChild(sevenDayContainer)
}

export async function getDailyWeather(getFutureForcast) {
    const futureWeatherData = await getFutureForcast();
    function eachDay(date, tempatureLow,tempatureHigh, classOfDay) {
        date = document.createElement("div");
        date.classList.add(classOfDay)
        aContainer.appendChild(date);
        let tempatureShowLow = document.createElement('p');
        let tempatureShowHigh = document.createElement('p')
        date.appendChild(tempatureShowLow);
        date.appendChild(tempatureShowHigh);
        tempatureShowLow.textContent = `${tempatureLow}°F`
        tempatureShowHigh.textContent = `${tempatureHigh}°F`
    }
    for (let i = 0; i < 6; i++) {
        let dayCount = i.toString();
    eachDay(dayCount,futureWeatherData.forecast.forecastday[i].day.mintemp_f,futureWeatherData.forecast.forecastday[i].day.maxtemp_f, dayCount )
    }
}