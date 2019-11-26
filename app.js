//requireds!!!
//const fs = require('fs');
//hay 3 tipos de required
// 1 => require que ya existe en node como la de arriba p
//2 => require de una libreria que no existe en node como por ejemplo require('express');
//3 => require de nuestrsos propios archivos require('./miarchivo');


/*
const multiplicar = require('./multiplicar/multiplicar.js');

let base = 8;

multiplicar.crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`));

    */

//usando la dessustructuracion 
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
//const { argv } = require('./config/yargs');
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

/*
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;*/

//let base = '7';
/*
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(parametro);
*/

console.log(argv);
let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(error => console.log(error));
        break;
    case "crear": //node .\app.js crear --base=4
        let base = argv.base;

        crearArchivo(base)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(error => console.log(error));
        break;
    default:
        console.log("comando no reconocido");
}


/*
crearArchivo2(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(error => console.log(error));
 */