const { Router } = require('express');
const router = Router();
const puntoTuristicoCtrl = require('../controller/puntoTuristico.controller');
//const auth = require('../helper/auth');

router.post('/crearReserva', puntoTuristicoCtrl.crearTurismo);

router.get('/listarReserva', puntoTuristicoCtrl.listar)
router.get('/listarReservaId/:id', puntoTuristicoCtrl.listarId)
router.get('/listarReservaCiudad/:ciudad', puntoTuristicoCtrl.listarCiudad)
router.get('/buscarPorCoincidenciaReserva/:guia', puntoTuristicoCtrl.buscarPorCoincidencia)

router.delete('/eliminarReserva/:id', puntoTuristicoCtrl.elimarReserva)

router.put('/actualizarReserva/:id', puntoTuristicoCtrl.actualizarReserva)

module.exports = router