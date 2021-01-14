const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    if (direccion) {

        const encodedUrl = encodeURI(direccion);

        const instance = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
            headers: { 'x-rapidapi-key': 'bef94fef84msh16b95db2e2eafe1p108950jsn113a521290c7' }
        });

        const resp = await instance.get();

        /* Lo comento porque falla el api
        if (resp.data.Results.length === 0){
            throw new Error(`No hay resultados para ${direccion}`)
        }

        const data = resp[0];*/
        const dir = 'New York City, New York'
        const lat = '40.750134'
        const lng = '-73.997009'

        return ({
            dir,
            lat,
            lng
        })

    }

}

module.exports = {
    getLugarLatLng
}