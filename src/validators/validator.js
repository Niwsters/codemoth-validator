"use strict";
// Node.JS virtual machine for running Javascript code safely within Javascript.
Object.defineProperty(exports, "__esModule", { value: true });
var validators_1 = require("./validators");
exports.validate = function (code, requestedValidator) {
    switch (requestedValidator) {
        case 'helloworld':
            return validators_1.helloworld(code);
        case 'simplegreeting':
            return validators_1.simplegreeting(code);
        case 'alicebobgreeting':
            return validators_1.alicebobgreeting(code);
    }
    return "No validator found with name '" + requestedValidator + "' ):";
};
//# sourceMappingURL=validator.js.map