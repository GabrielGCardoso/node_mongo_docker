var express = require('express');
const router = express.Router();

//example of global middleware
//router.use(function timeLog(req, res, next) {
//  console.log('Time: ', Date.now());
//  next();
//});

//example of middleware for one route
router.use("/about", function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

module.exports = router;