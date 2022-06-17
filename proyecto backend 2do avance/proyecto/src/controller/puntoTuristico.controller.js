const puntoTuristicoCtrl = {}
const puntoTuristicoModels = require('../models/puntoTuristico.models')

puntoTuristicoCtrl.crearTurismo = async(req, res) => {
    const { departamento, ciudad, direccion, lugar_a_visitar, guia, cantidad_turistas } = req.body
    const nuevoTurismo = new puntoTuristicoModels({
        departamento,
        ciudad,
        direccion,
        lugar_a_visitar,
        guia,
        cantidad_turistas
    })
    const respuesta = await nuevoTurismo.save()
    res.json({
        mensaje: 'Reserva de Tour creada',
        respuesta
    })
}

puntoTuristicoCtrl.listar = async(req, res) => {
    const respuesta = await puntoTuristicoModels.find()
    res.json(respuesta)
}

puntoTuristicoCtrl.listarId = async(req, res) => {
    const id = req.params.id
    const respuesta = await puntoTuristicoModels.findById({ _id: id })
    res.json(respuesta)
}

puntoTuristicoCtrl.listarCiudad = async(req, res) => {
    const id = req.params.id
    const respuesta = await puntoTuristicoModels.find({ ciudad: id })
    res.json(respuesta)
}

puntoTuristicoCtrl.buscarPorCoincidencia = async(req, res) => {
    const { guia } = req.params;
    const respuesta = await puntoTuristicoModels.find({ guia: { $regex: ".*" + guia } })
    res.json(respuesta)
}

puntoTuristicoCtrl.elimarReserva = async(req, res) => {
    const id = req.params.id
    await puntoTuristicoModels.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: 'Reserva eliminada'
    })
}

puntoTuristicoCtrl.actualizarReserva = async(req, res) => {
    const id = req.params.id
    await puntoTuristicoModels.findByIdAndUpdate({ _id: id }, req.body)
    const respuesta = await puntoTuristicoModels.findById({ _id: id })
    res.json({
        mensaje: 'Reserva actualizada',
        respuesta
    })
}


module.exports = puntoTuristicoCtrl