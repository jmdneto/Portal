// var nodemailer = require('nodemailer');
var express = require('express');
//var router = express.Router();
var handleSayHello = require('../mail.js');
var { check, validationResult } = require('express-validator/check');
var { sanitizeBody } = require('express-validator/filter');
var { matchedData } = require('express-validator/filter');
var flash = require('express-flash');
var path = require('path');
//var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
//app.use(express.static(path.join(__dirname , 'public')));

// app.use('/01/',express.static(path.join(__dirname + '/public/01')));
// app.use('/02/',express.static(path.join(__dirname + '/public/02')));
// app.use('03/assets',express.static(path.join(__dirname + '/public/03/assets')));
// app.use('03/images',express.static(path.join(__dirname + '/public/03/images')));
//app.use('/03/assets',express.static(path.join(__dirname + '/public/03/assets')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sayHello', mailRouter);
app.use('/planos-de-saude', planosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//app.use(bodyParser.json());
//app.use (bodyParser.urlencoded ({extended: true}));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index1', { title: 'Express' });
// });

// router.get('/01', function(req, res, next) {
//   res.render('index1', { title: 'Express' });
// });

// router.get('/01/generic.html', function(req, res, next) {
//   res.render('generic.html', { title: 'Express' });
// });

// router.get('/01/elements.html', function(req, res, next) {
//   res.render('elements.html', { title: 'Express' });
// });

// router.get('/02', function(req, res, next) {
//   res.render('index2', { title: 'Express' });
// });

// router.get('/02/generic.html', function(req, res, next) {
//   res.render('generic.html', { title: 'Express' });
// });

// router.get('/02/elements.html', function(req, res, next) {
//   res.render('elements.html', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.render('index3', {
    
    data:{},
  errors:{} 
})
});

router.get('/generic.html', function(req, res, next) {
  res.render('generic.html', { title: 'Express' });
});

router.get('/elements.html', function(req, res, next) {
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

router.post('/', [
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