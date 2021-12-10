const fs = require('fs');
const colors = require('colors');

const makeFile = async (base = 5, show = false, limit = 10) => {

    try {

        let exit = '';
        let cons = '';

        for (let i = 1; i <= limit; i++) {
            exit += `${base} x ${i} = ${base * i} \n`;
            cons += `${colors.red(base)} x ${colors.red(i)} = ${colors.red.bold(base * i)} \n`;
        }

        if (show == true) {
            console.log(('=================='.blue));
            console.log(colors.cyan('   Tabla del', colors.blue(base)));
            console.log(colors.blue('=================='));

            console.log(cons);
        }


        fs.writeFileSync(`./files/tabla-${base}.txt`, exit);

        return (`tabla-${base}.txt`);

    } catch (err) {
        throw err;
    }
}

module.exports = {
    //  makeFile: makeFile
    makeFile // al llamarse igual se puede omitir al ser redundante
}