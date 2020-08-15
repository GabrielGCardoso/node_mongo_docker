const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose
  .connect(
    'mongodb://mongo:27017/testdb',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var client = require('./client.route');
app.use('/client', client);

app.all("*", async (req, res) => {
    res.status(404).send("route not found")
})


module.exports = app;