var express = require('express');
const router = express.Router();

//router.use(function timeLog(req, res, next) {
//  console.log('Time: ', Date.now());
//  next();
//});

router.use("/about", function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

module.exports = router;