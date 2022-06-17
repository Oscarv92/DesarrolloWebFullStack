const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema

const mascotasSchema = new Schema({
    nombre_de_la_mascota: String,
    tipo_de_nascota: String,
    raza: String,
    edad: Number,
    estado_de_vacuna: String,
    nombre_del_dueno: String,
    cedula_del_dueno: Number,
    date: { type: Date, default: Date.now },
});


module.exports = mongoose.model('mascotas', mascotasSchema)