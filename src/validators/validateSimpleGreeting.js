"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var runCodeInVM_1 = require("./runCodeInVM");
var afterExecutionCheck = function (context) {
    console.log(context);
    if (!context.greeting) {
        return "Failure: You didn't create a function named 'greeting'.";
    }
    var name = "Test";
    var greeting = context.greeting(name);
    if (greeting === "Hello " + name + "!") {
        return "Success: The greeting function returned 'Hello [name]!'";
    }
    return "Failure: The greeting function did not return 'Hello [name]!'";
};
function default_1(code) {
    return runCodeInVM_1.default(code, afterExecutionCheck);
}
exports.default = default_1;
//# sourceMappingURL=validateSimpleGreeting.js.map