var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/new-page', function(req, res, next) {
  // res.json({tests: true})
  res.render('newPage', { title: 'Express' });
});

module.exports = router;
