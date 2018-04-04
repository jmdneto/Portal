var nodemailer = require('nodemailer');

var handleSayHello = function handleSayHello(req, res) {
    // Not the movie transporter!
  
    var transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port:587,
      secure:false,
      auth: {
          user: 'fq3dumm45ocs66p7@ethereal.email', // Your email id
          pass: 'rbFWMQYKMMNmRbkMXf' // Your password
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
    from: 'fq3dumm45ocs66p7@ethereal.email', // sender address
    to: 'fq3dumm45ocs66p7@ethereal.email', // list of receivers
    subject: 'Email de contato do Site', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
       // res.json({yo: 'error'});
      //  res.render('index3', { title: 'Express' });
      res.redirect(req.path);
       }else{
        console.log('Message sent: ' + info.response);
        // res.render('index3', { title: 'Express' });
        //res.json({yo: info.response});
       res.redirect(req.path);
    };
  });
  }

  exports.resources = handleSayHello;