
const { initializeCells } = require('./modules/buscaminas');

var config = {
  lado_tablero: 10,
  nMinas: 5,
};

var oTablero = initializeCells(config);
console.log(oTablero);
