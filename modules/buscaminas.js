
module.exports = { initializeCells };

/**
 * @typedef {object} config - { lado_tablero, nMinas}
 * @property {number} lado_tablero
 * @property {number} nMinas
 */

/**
 * @typedef {object} mapa_celdas_st
 * @property {object} i - numero de fila
 * @property {object} j - numero de columna
 * @property {object} status - o (open), f (flag)
 * @property {object} mina - celda con/sin mina
 * @property {object} [nminascerca] - sumatorio de numero de minas en celdas adyacentes
 */

 /**
 * Crea un tablero nuevo
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
    /**
     * @type {Object.<string, mapa_celdas_st>} mapa_celdas
     */
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
        mapa_celdas[cell_id] = { i, j, status, mina };
      }
    }
  
    return getAdjacentMines(mapa_celdas);
  
  }
  
  /**
   * calcula el sumatorio de todas las minas de las celdas adyacentes
   * @param {Object.<string, mapa_celdas_st>} celdas_calculadas
   * @returns {Object.<string, mapa_celdas_st>}
   */
  function getAdjacentMines(celdas_calculadas) {
  
    for (var celda in celdas_calculadas) {
      var i = celdas_calculadas[celda].i;
      var j = celdas_calculadas[celda].j;
  
      var key11 = `${i - 1} ${j - 1}`;
      var key12 = `${i - 1} ${j}`;
      var key13 = `${i - 1} ${j + 1}`;
      var key21 = `${i} ${j - 1}`;
      var key23 = `${i} ${j + 1}`;
      var key31 = `${i + 1} ${j - 1}`;
      var key32 = `${i + 1} ${j}`;
      var key33 = `${i + 1} ${j + 1}`;
  
      var nMinasCelda = 0;
      if (celdas_calculadas.hasOwnProperty(key11)) {
        if (celdas_calculadas[key11].mina) {
          nMinasCelda++;
        }
      };
  
      if (celdas_calculadas.hasOwnProperty(key12)) {
        if (celdas_calculadas[key12].mina) {
          nMinasCelda++;
        }
      };
  
      if (celdas_calculadas.hasOwnProperty(key13)) {
        if (celdas_calculadas[key13].mina) {
          nMinasCelda++;
        }
      };
  
      if (celdas_calculadas.hasOwnProperty(key21)) {
        if (celdas_calculadas[key21].mina) {
          nMinasCelda++;
        }
      };
  
      if (celdas_calculadas.hasOwnProperty(key23)) {
        if (celdas_calculadas[key23].mina) {
          nMinasCelda++;
        }
      };
  
      if (celdas_calculadas.hasOwnProperty(key31)) {
        if (celdas_calculadas[key31].mina) {
          nMinasCelda++;
        }
      };
  
      if (celdas_calculadas.hasOwnProperty(key32)) {
        if (celdas_calculadas[key32].mina) {
          nMinasCelda++;
        }
      };
  
      if (celdas_calculadas.hasOwnProperty(key33)) {
        if (celdas_calculadas[key33].mina) {
          nMinasCelda++;
        }
      };
  
      celdas_calculadas[celda].nminascerca = nMinasCelda;
    }
  
    return celdas_calculadas;
  };