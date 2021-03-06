const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listar } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(
            archivo => console.log(`Archivo creado: ${colors.green(archivo)}`)
        ).catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}

//console.log(process.argv);

//console.log(crearArchivo);
//console.log(argv.base);
// let parameter = argv[2];
// let base = parameter.split('=')[1];
// console.log(base);