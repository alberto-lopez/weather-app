const axios = require('axios');

const getWeather = async (lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=0a2c1cdf89a1e0cfba753c9244535434`);

    return resp.data.main.temp;
};

module.exports = {
    getWeather
};
