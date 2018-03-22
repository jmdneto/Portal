var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index1', { title: 'Express' });
});

router.get('/01', function(req, res, next) {
  res.render('index1', { title: 'Express' });
});

router.get('/01/generic.html', function(req, res, next) {
  res.render('generic.html', { title: 'Express' });
});

router.get('/01/elements.html', function(req, res, next) {
  res.render('elements.html', { title: 'Express' });
});

router.get('/02', function(req, res, next) {
  res.render('index2', { title: 'Express' });
});

router.get('/02/generic.html', function(req, res, next) {
  res.render('generic.html', { title: 'Express' });
});

router.get('/02/elements.html', function(req, res, next) {
  res.render('elements.html', { title: 'Express' });
});

router.get('/03', function(req, res, next) {
  res.render('index3', { title: 'Express' });
});

router.get('/03/generic.html', function(req, res, next) {
  res.render('generic.html', { title: 'Express' });
});

router.get('/03/elements.html', function(req, res, next) {
  res.render('elements.html', { title: 'Express' });
});
module.exports = router;
