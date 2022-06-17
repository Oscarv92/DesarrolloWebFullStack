const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    nombre: String,
    cargo: String,
    correo: String,
    contrasena: String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('admin', adminSchema)