const direccion = {
    desc: 'Direccion de la ciudad para obtener el clima',
    alias: 'd',
    demand: true
}

const argv = require('yargs')
    .options({ direccion })
    .help()
    .argv;

module.exports = {
    argv
}