const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar, hasta) => {
    try {
        let salida = ''
        let consola = ''

        for (let i = 1; i <= hasta; i++) {
            salida += `${i} x ${base} = ${i*base}\n`
            consola += `${i} ${'x'.rainbow} ${base} = ${i*base}\n`
        }

        if (listar) {
            console.log('========================='.green)
            console.log(`    Tabla del : ${base}`)
            console.log('========================='.blue)
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}