const { writeFileSync } = require("fs");
var colors = require("colors");

const crearArchivoTabla = (base = 5, times, listar) => {
  return new Promise((resolve, reject) => {
    try {
      let data = "";

      for (let index = 1; index <= times; index++) {
        data += `${base} x ${index} = ${base * index} \n`;
      }

      if (listar) {
        console.log("=========================================".green);
        console.log(`tabla del ${base}`.green.underline);
        console.log("=========================================".green);
        console.log(data.green);
      }

      writeFileSync(`./output/tabla del ${base}.txt`, data);
      resolve("Archivo generado correctamente");
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  crearArchivoTabla,
};
