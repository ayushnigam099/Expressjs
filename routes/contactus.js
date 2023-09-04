const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

router.post('/success', (req, res, next) => {
   console.log(req.body);
   res.send("<h1><center>Form successfully filled!</center></h1>")
  });
  

module.exports = router;