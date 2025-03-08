const express = require('express');
const CepController = require('../controllers/cep.js');

const controller = new CepController();
const router = express.Router();

router.get('/:cep', controller.GetAddress);
router.get('/', controller.ListAddresses);

module.exports = router;
