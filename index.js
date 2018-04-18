var express = require('express');
var http = require('http');
var path = require('path');
var util = require('util');
var vm = require('vm');
var validator = require('./src/validator');
var app = express();
// Use body-parser for parsing request data
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// Make static files in the public folder accessible (for images, scripts, etc)
app.use('/public', express.static('public'));
// Send index.html on root path
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
// Validate code that is sent to the validate path
app.post('/validate', function (req, res, next) {
    var code = req.body.code;
    var feedback = validator.validate(code);
    var sandbox = {};
    var context = new vm.createContext(sandbox);
    try {
        var script = new vm.Script(code);
        script.runInContext(context);
        res.send('Your code did not throw an error!');
    }
    catch (e) {
        var relevantErrorLines = e.stack.match(/^(?!evalmachine.*\n)(?!\s*at.*)(.+).*$/gm);
        var error_1 = '';
        relevantErrorLines.forEach(function (line) {
            error_1 += line + '\n';
        });
        res.send(error_1);
    }
});
var server = http.createServer(app);
server.listen(8080, function () {
    console.log('listening on *:8080');
});
//# sourceMappingURL=index.js.map