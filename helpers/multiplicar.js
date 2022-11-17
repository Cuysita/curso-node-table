const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors/safe');
/*
//METODO 1 - PROMESA TRADICIONAL
const crearArchivo = ( base = 5) => {
    return promesa = new Promise ((resolve, reject) => {
        let nombreArchivo = `tabla-${base}.txt`
    
            console.log("====================")
            console.log("    TABLA DEL: ", base)
            console.log("====================")
            
            let salida = '';
            for(var i = 1; i <= 10; i++){
                salida += `${base} x ${i} = ${base * i}\n`;
            }
            console.log(salida);
            
            
            //fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            //    if(err) throw err;
            //    console.log(`tabla-${base}.txt creado`);
            //})

            fs.writeFileSync(`tabla-${base}.txt`, salida);
            //console.log(`tabla-${base}.txt creado`);

            resolve(`tabla-${base}.txt`);

    })
 
}
*/

//METODO 2 - SIMILAR A PROMESA
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {

        let nombreArchivo = `tabla-${base}.txt`

        let salida = '';
        let consola = '';
        for (var i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += colors.random(`${base} x ${i} = ${base * i}\n`);
        }

        if (listar) {
            console.log("====================")
            console.log("    TABLA DEL: ", colors.red.bgCyan(base))
            console.log("====================")
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return colors.rainbow(`tabla-${base}.txt`);
    } catch (err) {
        throw err;
    }
}


module.exports = {
    crearArchivo
}