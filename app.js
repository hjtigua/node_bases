const argv = require("./config/yargs");
const { crearArchivoTabla } = require("./helpers/multiplicar");
var colors = require("colors");

console.clear();
const times = argv.t;

crearArchivoTabla(argv.b, times, argv.l)
  .then((resp) => console.log(resp.rainbow))
  .catch((err) => console.log(err));
