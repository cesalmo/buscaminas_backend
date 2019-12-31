
const { initializeCells } = require('./modules/buscaminas');
var express = require('express');
var app = express();


// http://localhost:3000/api/buscaminas?lado=10&minas=5
app.get('/api/buscaminas', function (req, res) {

  var oQuery = req.query;
  if (oQuery.hasOwnProperty("lado") && oQuery.hasOwnProperty("minas")) {

    var config = {
      lado_tablero: oQuery.lado,
      nMinas: oQuery.minas,
    };

    var oTablero = initializeCells(config);

    res.send(oTablero);
  } else {
    res.send('mal');
  };


});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
