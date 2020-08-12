const express = require('express');

const LoginController = require('./controllers/LoginController') 
const ClienteController = require('./controllers/ClienteController') 

const router = express.Router();

//Rotas de autenticação
router.post('/pessoa', LoginController.novoUsuario);
router.get('/login', LoginController.logar);
router.get('/listarpessoas', LoginController.autorizaRota, LoginController.listarPessoas);

//Identifica usuario logado
router.get('/me', LoginController.autorizaRota, LoginController.me);

//Rotas para gerencia clientes na abertura da ordem
//ABERTA 
//CORRIGIDA
//CONSULTADA
router.post('/ordem', LoginController.autorizaRota, ClienteController.novaOrdem )



module.exports = router;
