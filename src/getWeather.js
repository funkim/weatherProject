
export async function getWeather(userInput) {
    try {
    const baltimoreWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=51b63f495ebd4f2a82f11004241904&q=${userInput}&aqi=no`)
    const baltimoreWeatherData = await baltimoreWeather.json();
    console.log(baltimoreWeatherData);
    return baltimoreWeatherData;
} catch(error) {
console.log(error);
}
}

export async function getFutureForcast(userInput) {
    try {
        const futureWeather = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=51b63f495ebd4f2a82f11004241904&q=${userInput}&days=7&aqi=yes&alerts=yes`)
        const futureWeatherData = await futureWeather.json();
        console.log(futureWeatherData);
        return futureWeatherData;
    } catch(error) {
        console.log(error);
    }
}

