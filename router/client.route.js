var express = require('express');
//const { default: app } = require('.');
//var router = express.Router();
var router = require('../middlewares/client');
var { createClient, getClient } = require('../controllers/client.controller');

// middleware that is specific to this router
// define the about route

router.post('/create', async function(req, res) {
  const { name, code } = req.body 
  const name2insert = (name!= null) ? name : "unnamed"; 
  const code2insert = (code!= null) ? code : 123; 
  res.send(await createClient(name2insert,code2insert));
});

router.get('/', async function(req, res) {
  res.send(await getClient());
});

// define the home page route
router.get('/', async function(req, res) {
  res.send('Client home page');
});

module.exports = router;