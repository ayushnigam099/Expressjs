
const path = require('path');
const rootDir = require('../util/path');

exports.getAddProduct= (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  }
  exports.postAddProduct= (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  }
  exports.getContactus=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
  }

  exports.postSuccess= (req, res, next) => {
    console.log(req.body);
    res.send("<h1><center>Form successfully filled!</center></h1>")
   } 

   exports.getHome=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  }