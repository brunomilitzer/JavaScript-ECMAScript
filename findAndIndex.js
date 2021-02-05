const cityWeatherData = require('./weatherData');

// Array.prototype.find()
const cityNames = cityWeatherData.city.map((city, i) => {
    return city.name;
});

//console.log(cityNames);

const warmCity = cityWeatherData.city.find((city, i) => {
    if (city.temp > 30) return true;

    return false;
});

console.log(warmCity);

// Array.prototype.findIndex()

