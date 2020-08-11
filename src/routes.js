const express = require('express');

const LoginControl = require('./controllers/LoginControl') 

const router = express.Router();

//Rotas de autenticação
router.post('/pessoa', LoginControl.criaUsuario);
router.get('/login', LoginControl.logar);
router.get('/listarpessoas', LoginControl.autenticaRota, LoginControl.listarpessoas);

//Identifica usuario logado
router.get('/me', LoginControl.autenticaRota, LoginControl.me);



module.exports = router;
