const { rejects } = require('assert');
const fs = require ('fs');


const makeFile = (base = 5) => {


    return new Promise ( (resolve, reject) => {
        console.log('==================');
        console.log('   Tabla del', base);
        console.log('==================');
    
        let exit = '';
    
        for (let i = 1; i <= 10; i++) {
            exit += `${base} x ${i} = ${base * i} \n`;
        }
    
        console.log(exit);
    
    
        // fs.writeFile( `tabla-${base}.txt`,exit, (err) =>{
        //     if (err) throw  err;
    
        //     console.log(`tabla-${base}.txt creado con EXITO!!`)
        // } )
    
        fs.writeFileSync(`tabla-${base}.txt`, exit);
    
        resolve(`tabla-${base}`)
    
    })
  
}

module.exports = {
    //  makeFile: makeFile
    makeFile // al llamarse igual se puede omitir al ser redundante
}