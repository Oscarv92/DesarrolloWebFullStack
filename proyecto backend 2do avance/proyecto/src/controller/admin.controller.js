const adminCtrl = {};
const adminModel = require('../models/admin.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

adminCtrl.crearAdmin = async(req, res) => {
    const { nombre, cargo, correo, contrasena } = req.body
    const nuevoAdmin = new adminModel({
        nombre,
        cargo,
        correo,
        contrasena
    })

    const correoAdmin = await adminModel.findOne({ correo: correo })
    if (correoAdmin) {
        res.json({
            mensaje: 'El usuario ya existe'
        })
    } else {
        nuevoAdmin.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({ _id: nuevoAdmin._id }, 'Secreta')
        await nuevoAdmin.save()
        res.json({
            mensaje: 'Bienvenido',
            id: nuevoAdmin._id,
            nombre: nuevoAdmin.nombre,
            token
        })
    }
}

adminCtrl.login = async(req, res) => {
    const { correo, contrasena } = req.body
    const admin = await adminModel.findOne({ correo: correo })
    if (!admin) {
        return res.json({
            mensaje: 'correo incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena, admin.contrasena)
    if (match) {

        const token = jwt.sign({ _id: admin._id }, 'Secreta')
        res.json({
            mensaje: 'Bienvenido',
            id: admin.id,
            nombre: admin.nombre,
            token
        })

    } else {
        res.json({
            mensaje: 'Contraseña incorrecta'
        })
    }

}


module.exports = adminCtrl