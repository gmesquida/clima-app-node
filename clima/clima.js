const axios = require('axios');

const getClima = async(lat, lng) => {

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0619067cf8b9b5dfeb890f56af6887b2&units=metric`,
    });

    const resp = await instance.get();
    return (
        resp.data.main.temp
    )
}

module.exports = {
    getClima
}