const mongoose = require('mongoose');
const { Schema } = mongoose

const puntoTuristicoSchema = new Schema({
    departamento: String,
    ciudad: String,
    direccion: String,
    lugar_a_visitar: String,
    guia: String,
    cantidad_turistas: Number,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('puntoTuristico', puntoTuristicoSchema)