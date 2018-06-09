"use strict";
// Node.JS virtual machine for running Javascript code safely within Javascript.
Object.defineProperty(exports, "__esModule", { value: true });
var validateHelloWorld_1 = require("./validateHelloWorld");
var validateSimpleGreeting_1 = require("./validateSimpleGreeting");
exports.validate = function (code, requestedValidator) {
    switch (requestedValidator) {
        case 'helloworld':
            return validateHelloWorld_1.default(code);
        case 'simplegreeting':
            return validateSimpleGreeting_1.default(code);
    }
    return "No validator found with name '" + requestedValidator + "' ):";
};
//# sourceMappingURL=validator.js.map