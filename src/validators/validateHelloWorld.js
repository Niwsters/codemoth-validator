"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Node.JS virtual machine for running Javascript code safely within Javascript.
var runCodeInVM_1 = require("./runCodeInVM");
var afterExecutionCheck = function (context) {
    if (context.output === "Hello World!") {
        return "Success: Code wrote 'Hello World!' in console!";
    }
    else {
        return "Failure: Code didn't write 'Hello World!' in console.";
    }
};
function default_1(code) {
    return runCodeInVM_1.default(code, afterExecutionCheck);
}
exports.default = default_1;
//# sourceMappingURL=validateHelloWorld.js.map