

const express = require('express');


const productController= require('../controllers/products')

const router = express.Router();

router.get('/contactus', productController.getContactus);

router.post('/success', productController.postSuccess);
  

module.exports = router;