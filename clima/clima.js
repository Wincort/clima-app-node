const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=0ecc83c88f372fefcf551f93aabb20fa`);
    /*if (resp.cod !== 200) {
        throw new Error(`Error ${resp.cod}=>${resp.message}`);
    }*/
    return resp.data.main.temp;

}

module.exports = {
    getClima
}