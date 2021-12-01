const argv = require('yargs')
    .option('b', {
        //De esta forma se puede poner b o base en los argumentos
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la salida en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es el numero hasta que se multiplicara la base'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) throw 'La base tiene que ser un numero'

        if(isNaN(argv.h)) throw 'La bandera hasta debe ser un numero'

        return true
    })
    .argv

module.exports = argv