// Node.JS virtual machine for running Javascript code safely within Javascript.
var basicErrorCheck = require('./basicErrorCheck');
var afterExecutionCheck = function (context) {
    if (context.output === "Hello World!") {
        return "Success: Code wrote 'Hello World!' in console!";
    }
    else {
        return "Failure: Code didn't write 'Hello World!' in console.";
    }
};
module.exports = function (code) {
    return basicErrorCheck(code, afterExecutionCheck);
};
//# sourceMappingURL=validateHelloWorld.js.map