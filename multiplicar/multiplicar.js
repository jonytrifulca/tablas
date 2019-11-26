const fs = require('fs');
var colors = require('colors/safe');





let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base '${base}' no es un numero`);
            return; //para no seguir
        }


        let data = '';

        for (let i = 1; i < 11; i++) {
            let res = base * i;
            data += `${base} * ${i} = ${res} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/tabla-${base}.txt`);
        });

    });
}


function listarTabla(base, limite) {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base '${base}' no es un numero`);
            return; //para no seguir
        }

        console.log(colors.green(`--------Tabla del ${base}------------`)); // outputs green text

        for (let i = 1; i < limite; i++) {
            let res = base * i;
            console.log(colors.red(`${base} * ${i} = ${res}`));
        }

    });
}



//lo exporto para usarlo fuera de aqui
module.exports = {
    crearArchivo,
    listarTabla
}