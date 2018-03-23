var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
//var handleSayHello = require('./mail.js');


router.post('/03', handleSayHello); // handle the route at yourdomain.com/sayHello


function handleSayHello(req, res) {
  // Not the movie transporter!

  var transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port:587,
    secure:false,
    auth: {
        user: 'acc7iymkqk2e73bm@ethereal.email', // Your email id
        pass: 'Qbbgmxz6ZZFGaKEHzz' // Your password
    },
    tls: {
      rejectUnauthorized: false
  }

  // var transporter = nodemailer.createTransport({
  //     service: 'Gmail',
  //     auth: {
  //         user: 'jmdneto@gmail.com', // Your email id
  //         pass: 'joaoguilherme2708' // Your password
  //     }
  });

var text = 'Hello world from \n\n' + req.body.name + '\n' + req.body.email + '\n' + req.body.message;


var mailOptions = {
  from: 'jmdneto@gmail.com', // sender address
  to: 'acc7iymkqk2e73bm@ethereal.email', // list of receivers
  subject: 'Email de contato do Site', // Subject line
  text: text //, // plaintext body
  // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};

transporter.sendMail(mailOptions, function(error, info){
  if(error){
      console.log(error);
     // res.json({yo: 'error'});
    //  res.render('index3', { title: 'Express' });
    res.redirect('/03');
     }else{
      console.log('Message sent: ' + info.response);
      // res.render('index3', { title: 'Express' });
      //res.json({yo: info.response});
      res.redirect('/03');
  };
});
}

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
