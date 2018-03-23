var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
//var handleSayHello = handleSayHello();


//router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello


// function handleSayHello(req, res) {
//   // Not the movie transporter!
//   var transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//           user: 'jmdneto@gmail.com', // Your email id
//           pass: 'joaoguilherme2708' // Your password
//       }
//   });

// var text = 'Hello world from \n\n' + req.body.name + req.body.email + req.body.message;


// var mailOptions = {
//   from: 'jmdnetoe@gmail.com', // sender address
//   to: 'jmdneto@gmail.com', // list of receivers
//   subject: 'Email Example', // Subject line
//   text: text //, // plaintext body
//   // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if(error){
//       console.log(error);
//       res.json({yo: 'error'});
//   }else{
//       console.log('Message sent: ' + info.response);
//       res.json({yo: info.response});
//   };
// });
// }
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
//handleSayHello.exports;