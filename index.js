
const { initializeCells } = require('./modules/buscaminas');
var express = require('express');
var app = express();


var config = {
  lado_tablero: 10,
  nMinas: 5,
};

var oTablero = initializeCells(config);
console.log(oTablero);


// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
