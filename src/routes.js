const express = require('express');

const LoginControl = require('./controllers/LoginControl') 

const router = express.Router();

router.post('/pessoa', LoginControl.criaUsuario);
router.get('/pessoa', LoginControl.logar);
router.get('/listarUsers', LoginControl.autenticaRota, LoginControl.listaUsuarios);
router.get('/me', LoginControl.autenticaRota, LoginControl.me);

module.exports = router;
