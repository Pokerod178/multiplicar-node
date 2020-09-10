// requireds
const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite) => {
    console.log(`tabla del: ${base} al ${limite}`.gray);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`.green);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El Valor Introducido ${base} No Es Un Numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}