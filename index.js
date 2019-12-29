// objeto config = { lado_tablero, nMinas}
/**
 * @typedef {object} config
 * @property {number} lado_tablero
 * @property {number} nMinas
 */
var config = {
  lado_tablero: 10,
  nMinas: 5,
};

// objeto board_status { "cell" }
// objeto cell { "cell_id" : { fila, columna, status('o', 'f'), mina, nminascerca } }
var board_status = {};

// funcion initializeCells con parametro "config" return "board_status"

/**
 * @typedef {object} mapa_celdas_st
 * @property {object} i - numero de fila
 * @property {object} j - numero de columna
 * @property {object} status - o (open), f (flag)
 * @property {object} mina - celda con/sin mina
 * @property {object} [nminascerca] - sumatorio de numero de minas en celdas adyacentes
 */

/**
 * @param {config} config_data
 * @returns {Object.<string, mapa_celdas_st>}
 */
function initializeCells(config_data) {
  //crea listado de minas
  var nCeldas = Math.pow(config_data.lado_tablero, 2);
  var minas = [];
  do {
    minas.push(Math.ceil(Math.random() * nCeldas));
  } while (minas.length <= config_data.nMinas - 1);

  // crea mapa de celdas
  var mapa_celdas = {};
  var contador = 0;
  for (let i = 1; i <= config_data.lado_tablero; i++) {
    for (let j = 1; j <= config_data.lado_tablero; j++) {
      contador++;
      var cell_id = i + ' ' + j;
      //si contador esta incluido en listado de minas -> marca la mina -> true
      var status = ' ';
      var mina = new Boolean();
      if (minas.includes(contador)) {
        mina = true;
      } else {
        mina = false;
      }
      // mapa_celdas[contador] = { cell_id, i, j, status, mina };
      mapa_celdas[cell_id] = {  i, j, status, mina };
    }
  }

  return getAdjacentMines(mapa_celdas);
  
}

/**
 * @param {Object.<string, mapa_celdas_st>} celdas_calculadas 
 * @returns {Object.<string, mapa_celdas_st>}
 */
function getAdjacentMines(celdas_calculadas){
  var mapa_celdas_nminas = [];
  // celdas_calculadas.some(el => el.cell_id == "10 2")
  return mapa_celdas_nminas;
};

initializeCells(config);
