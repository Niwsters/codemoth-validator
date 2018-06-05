// Node.JS virtual machine for running Javascript code safely within Javascript.
var vm = require('vm');
var basicErrorCheck = require('./basicErrorCheck');
var validateHelloWorld = require('./validateHelloWorld');
exports.validate = function (code, requestedValidator) {
    switch (requestedValidator) {
        case 'helloworld':
            return validateHelloWorld(code);
        default:
            return basicErrorCheck(code);
            break;
    }
};
//# sourceMappingURL=validator.js.map