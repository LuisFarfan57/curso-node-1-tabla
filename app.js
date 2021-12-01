const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

console.clear()

//Solo con esto ya se obtiene la base que se envia por los argumentos
//console.log(argv.base, argv.l)

//Los argumentos al momento de ejecutar una aplicacion de consola vienen en process.argv
// console.log(process.argv)
// const [,, arg3 = 'base=5'] = process.argv
// const [, base = 5] = arg3.split('=')

// console.log(base)

crearArchivo(argv.base, argv.l, argv.hasta)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado exitosamente`.rainbow))
    .catch(err => console.log(err))