const express = require('express')
const http = require('http')
const path = require('path')
const util = require('util')
const validator = require('./src/validators/validator')

let app = express()

function sendToFrontend (req, res, next) {
  res.sendFile(path.join(__dirname + '/public/index.html'))
}

// Use body-parser for parsing request data
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Make static files in the public folder accessible (for images, scripts, etc)
app.use('/public', express.static('public'))

// Send index.html on root path
app.get('/', (req, res, next) => {
  sendToFrontend(req, res, next)
})

// Validate code that is sent to the validate path
app.post('/validate', (req, res, next) => {
  let code:string = req.body.code

  let feedback:string = validator.validate(code)

  res.send(feedback)
})

app.get('/*', (req, res, next) => {
  sendToFrontend(req, res, next)
})

let server = http.createServer(app)
server.listen(8080, () => {
  console.log('listening on *:8080')
})
