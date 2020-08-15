var express = require('express');
var router = require('../middlewares/client');
var { createClient, getClient } = require('../controllers/client.controller');

router.post('/create', async function(req, res) {
  const { name, code, additionalInfo } = req.body 
  res.send(await createClient(name, code, additionalInfo));
});

router.get('/', async function(req, res) {
  res.send(await getClient());
});

module.exports = router;