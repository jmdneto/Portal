const bodyParser = require('body-parser')
const validator = require('express-validator')

const middlewares = [
  // ...
  bodyParser.urlencoded(),
  validator()
]