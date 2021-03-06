var express = require('express');
var http = require('http');
var path = require('path');
var util = require('util');
var validator = require('./src/validators/validator');
var app = express();
function sendToFrontend(req, res, next) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
}
// Use body-parser for parsing request data
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// Make static files in the public folder accessible (for images, scripts, etc)
app.use('/public', express.static('public'));
// Send index.html on root path
app.get('/', function (req, res, next) {
    sendToFrontend(req, res, next);
});
// Validate code that is sent to the validate path
app.post('/validate', function (req, res, next) {
    var code = req.body.code;
    var requestedValidator = req.body.validator;
    var feedback = validator.validate(code, requestedValidator);
    res.send(feedback);
});
app.get('/*', function (req, res, next) {
    sendToFrontend(req, res, next);
});
var server = http.createServer(app);
server.listen(8080, function () {
    console.log('listening on *:8080');
});
//# sourceMappingURL=index.js.map