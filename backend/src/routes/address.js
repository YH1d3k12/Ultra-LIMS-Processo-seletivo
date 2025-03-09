const express = require('express');
const AddressController = require('../controllers/address.js');

const controller = new AddressController();
const router = express.Router();

router.get('/:cep', controller.GetAddress);
router.get('/', controller.ListAddresses);

module.exports = router;
