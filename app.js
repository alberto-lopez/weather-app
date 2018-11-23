const location = require('./location/location');
const weather = require('./weather/weather');
const colors = require('colors');
const argv = require('yargs').options({
    address: {
        alias: 'a',
        demand: 'true',
        desc: 'Address of the city to obtain de weather'
    }
}).argv;


let getInfo = async (address) => {
    try {
        let coors = await location.getLocation(address);
        let temp = await weather.getWeather(coors.lat, coors.lng);

        return `The weather in ${coors.address} is ${temp}º degrees`.yellow;
    }catch (e) {
        return `Was not possible to find the weater for ${argv.address}`.red;
    }
};

getInfo(argv.address)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));
