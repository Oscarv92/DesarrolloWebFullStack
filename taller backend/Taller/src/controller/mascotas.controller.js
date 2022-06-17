const mascotasCtrl = {};
const res = require('express/lib/response');
const mascotas = require('../models/mascotas.models');
/*aqui estamos realizando nuestra primera peticion:POST la cual se va a encargar de enviar informacion que requerimos*/
mascotasCtrl.crear = async(req, res) => {
    const { nombre_de_la_mascota, tipo_de_nascota, raza, edad, estado_de_vacuna, nombre_del_dueno, cedula_del_dueno } = req.body
    const nuevaMascota = new mascotas({
            nombre_de_la_mascota,
            tipo_de_nascota,
            raza,
            edad,
            estado_de_vacuna,
            nombre_del_dueno,
            cedula_del_dueno,
        })
        //aqui evaluamos la respuesta, si es OK nos va a retornar el mensaje positivo
    const respuesta = await nuevaMascota.save()
    res.json({
        mensaje: 'Mascota creada',
        respuesta
    })

}

mascotasCtrl.listar = async(req, res) => {
    const respuesta = await mascotas.find()
    res.json(respuesta)
}

module.exports = mascotasCtrl