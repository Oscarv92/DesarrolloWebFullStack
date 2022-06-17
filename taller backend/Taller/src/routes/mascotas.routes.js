const { Router } = require('express');
const router = Router();
const mascotasCtrl = require('../controller/mascotas.controller');

router.post('/crear', mascotasCtrl.crear);
router.get('/listar', mascotasCtrl.listar);

module.exports = router