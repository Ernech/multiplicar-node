const fs = require('fs');
const colors = require('colors');

let listar = (base, limite) => {
    console.log('============================='.green);
    console.log(`=======Base de ${base}========`.red);
    console.log('============================='.blue);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}


crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`EL valor introducido '${base}' no es un número`);
            return;
        }
        let dataFile = '';
        for (let i = 1; i <= limite; i++) {
            dataFile += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, dataFile, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
            //console.log(`El archivo tabla-${base} ha sido creado`);
        });
    });
}

module.exports = {
    crearArchivo,
    listar
};