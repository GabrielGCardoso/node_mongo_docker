//const express = require('express');
// inicializar app express
//const app = express();

//const PORT = process.env.PORT || 3000;
const PORT = 3000;

const app = require("./router");

app.listen(PORT, () => console.log(`server is listening on port  ${PORT}`));