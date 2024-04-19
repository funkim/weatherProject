
export async function getWeather() {
    try {
    const baltimoreWeather = await fetch('http://api.weatherapi.com/v1/current.json?key=51b63f495ebd4f2a82f11004241904&q=Baltimore&aqi=no')
    const baltimoreWeatherData = await baltimoreWeather.json();
    console.log(baltimoreWeatherData);
    return baltimoreWeatherData;
} catch(error) {
console.log(error);
}
}

