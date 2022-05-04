const { Router } = require('express');
const { usuariosGet,
        usuariosPut,
        usuariosPost, 
        usuariosPatch, 
        usuariosDelete } = require('../controllers/usuarios');

const router = Router();

// Metodo GET
router.get('/', usuariosGet );

// Metodo PUT
router.put('/:id', usuariosPut );

// Metodo POST
router.post('/', usuariosPost );

// Metodo PATCH
router.patch('/', usuariosPatch );

// Metodo DELETE
router.delete('/', usuariosDelete );

module.exports = router;