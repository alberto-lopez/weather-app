const axios = require('axios');

const getLocation = async (address) => {
    let encoderUrl = encodeURI(address);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoderUrl}&key=AIzaSyDm8QQ9IMORmPWFwPBoOpIltXvm64vc4Jc`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No results for the city ${address}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        address: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
};


module.exports = {
    getLocation
};
