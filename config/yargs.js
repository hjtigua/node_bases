const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("t", {
    alias: "times",
    type: "number",
    default: 10,
    describe: "Times",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }

    if (isNaN(argv.t)) {
      throw "La base tiene que ser un número";
    }

    return true;
  }).argv;

module.exports = argv;
