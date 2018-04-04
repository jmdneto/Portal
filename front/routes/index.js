// var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
var handleSayHello = require('../mail.js');
var { check, validationResult } = require('express-validator/check');
var { sanitizeBody } = require('express-validator/filter');
var { matchedData } = require('express-validator/filter');
var flash = require('express-flash');
var path = require('path');

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
  res.render('index3', {
    
    data:{},
  errors:{} 
})
});

router.get('/03/generic.html', function(req, res, next) {
  res.render('generic.html', { title: 'Express' });
});

router.get('/03/elements.html', function(req, res, next) {
  res.render('elements.html', { title: 'Express' });
});


// router.post('/03', handleSayHello.resources); // handle the route at yourdomain.com/sayHello
// router.post('/03/generic.html', handleSayHello.resources); // handle the route at yourdomain.com/sayHello
  
// router.post('/03', function(req, res, next) {
// res.render('/03',{
//     data: req.body,
//     errors: {
//             name: { 
//                 msg: 'É necessário o preencimento do campo nome'},
//             email: { 
//                 msg: 'É necessário o preencimento do campo e-mail'},
//           message: { 
//                 msg: 'É necessário o preencimento do campo mensagem'}
//     }
//   })
// });
// router.post('/03', function(req,res){
// res.render('index3',{
//   data: req.body,
//   errors: {
//     name: { 
//         msg: 'É necessário o preencimento do campo nome'},
//     email: { 
//         msg: 'É necessário o preencimento do campo e-mail'},
//   message: { 
//         msg: 'É necessário o preencimento do campo mensagem'}
// }


// })

// })

router.post('/03', [
  check('name')
    .isLength({ min: 1 })
    .withMessage('Nome is required')
    .trim(),
  check('email')
    .isEmail()
    .withMessage('That email doesn‘t look right')
    .trim()
    .normalizeEmail()
], function (req, res) {
  var errors = validationResult(req)
  if (!errors.isEmpty()){
    res.render('index3', {
    data: req.body,
    errors: errors.mapped()
      }
    )
  }
  else 
  {
    // return res.render('index3', {
    // data: req.body,
    // errors: errors.mapped()
    req.flash('success', 'Thanks for the message! I‘ll be in touch :)')
    var data = matchedData(req)
    console.log('Sanitized:', data) 
    handleSayHello.resources(req,res)
    //res.redirect('/03')
      }
  //   )
  // }

  
  //req.flash('success', 'Thanks for the message! I‘ll be in touch :)')
  //res.redirect('/03')
}
);


module.exports = router;
//exports.resources = errors;