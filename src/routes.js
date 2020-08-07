const express = require('express');

const PessoaController = require('./controllers/PessoaController') 

const router = express.Router();

router.post('/pessoa', PessoaController.store);

module.exports = router;
