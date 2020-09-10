const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar')
const { argv } = require('./config/yargs');
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log("comando no reconocido");
        break;
}

// let parametro = argv[2];
// let base = parametro.split('=')[1]