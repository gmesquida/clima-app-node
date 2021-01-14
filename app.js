const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de donde obtener el tiempo',
            demand: true
        }
    })
    .argv;

const encodedURL = encodeURI(argv.direccion);

// console.log(argv.direccion);

// Metodo 1, sin instanciar
/*if (direccion) {
    axios({
            method: 'get',
            url: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
            headers: { 'x-rapidapi-key': 'bef94fef84msh16b95db2e2eafe1p108950jsn113a521290c7' }
        })
        .then((response) => {
            // handle success
            if (response.data.Results) console.log(response.data.Results[0]);
            else console.log('No hay resultados en la busqueda');
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })

}*/

// Metodo 2, instanciando

/*if (direccion) {
    lugar.getLugarLatLng(direccion)
        .then((latLng) => {
            console.log(latLng)
            return (latLng);
        })
        .then(async(latLng) => {
            let tmpAct = await clima.getClima(latLng.lat, latLng.lng);
            return ({
                dir: latLng.dir,
                tmpAct
            })
        })
        .then((climaAct) => console.log(`Temperatura de ${climaAct.dir} es ${climaAct.tmpAct}ºC`))
        .catch(err => console.log(err));

}*/

const getInfo = async(direccion) => {
    return await lugar.getLugarLatLng(direccion)
        .then((latLng) => {
            //console.log(latLng)
            return (latLng);
        })
        .then(async(latLng) => {
            let tmpAct = await clima.getClima(latLng.lat, latLng.lng);
            //console.log(tmpAct);
            return ({
                dir: latLng.dir,
                tmpAct
            })
        })
        .then((climaAct) => `La temperatura de ${climaAct.dir} es ${climaAct.tmpAct}ºC`)
        .catch(err => err);

}

if (encodedURL) {
    getInfo(encodedURL)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
/*if (encodedURL) {
    lugar.getLugarLatLng(direccion)
        .then((latLng) => {
            console.log(latLng)
            return (latLng);
        })
        .then(async(latLng) => {
            let tmpAct = await clima.getClima(latLng.lat, latLng.lng);
            return ({
                dir: latLng.dir,
                tmpAct
            })
        })
        .then((climaAct) => console.log(`Temperatura de ${climaAct.dir} es ${climaAct.tmpAct}ºC`))
        .catch(err => console.log(err));

}*/