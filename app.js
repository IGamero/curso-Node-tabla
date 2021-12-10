const { makeFile } = require('./helpers/multiplication');
const argv = require('./config/yargs');
const colors = require ('colors');


console.clear(); //limpia la consola

makeFile(argv.b, argv.s, argv.l)
    .then (fileName => console.log (colors.green(fileName, 'CREADO!!')))
    .catch( err => console.log(err));


