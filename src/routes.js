const express = require('express');

const PessoaController = require('./controllers/PessoaController') 

const router = express.Router();

router.post('/pessoa', PessoaController.store);
router.get('/pessoa/:idpessoa', PessoaController.index);

module.exports = router;
