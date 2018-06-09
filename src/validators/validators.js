"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Node.JS virtual machine for running Javascript code safely within Javascript.
var runCodeInVM_1 = require("./runCodeInVM");
function helloworld(code) {
    return runCodeInVM_1.default(code, function (context) {
        if (context.output === "Hello World!") {
            return "Success: Code wrote 'Hello World!' in console!";
        }
        else {
            return "Failure: Code didn't write 'Hello World!' in console.";
        }
    });
}
exports.helloworld = helloworld;
function simplegreeting(code) {
    return runCodeInVM_1.default(code, function (context) {
        if (!context.greeting) {
            return "Failure: You didn't create a function named 'greeting'.";
        }
        var name = "Test";
        var greeting = context.greeting(name);
        if (greeting === "Hello " + name + "!") {
            return "Success: The greeting function returned 'Hello [name]!'";
        }
        return "Failure: The greeting function did not return 'Hello [name]!'";
    });
}
exports.simplegreeting = simplegreeting;
function alicebobgreeting(code) {
    return runCodeInVM_1.default(code, function (context) {
        var name, greeting;
        if (!context.greeting) {
            return "Failure: You didn't create a function named 'greeting'.";
        }
        name = "Test";
        greeting = context.greeting(name);
        var greetingSaysHello = false;
        if (greeting === "Hello " + name + "!") {
            return "Failure: The greeting function says 'Hello [name]!' to other names than Alice and Bob.";
        }
        if (greeting === "Hello!") {
            greetingSaysHello = true;
        }
        else {
            return "Failure: The greeting doesn't say 'Hello!' to names other than Alice and Bob.";
        }
        name = "Alice";
        greeting = context.greeting(name);
        var greetingSaysHelloAlice = false;
        if (greeting === "Hello " + name + "!") {
            greetingSaysHelloAlice = true;
        }
        else {
            return "Failure: The greeting function doesn't say 'Hello Alice!'";
        }
        name = "Bob";
        greeting = context.greeting(name);
        var greetingSaysHelloBob = false;
        if (greeting === "Hello " + name + "!") {
            greetingSaysHelloBob = true;
        }
        else {
            return "Failure: The greeting function doesn't say 'Hello Bob!'";
        }
        if (greetingSaysHello && greetingSaysHelloAlice && greetingSaysHelloBob) {
            return "Success: The greeting function works properly!";
        }
        return "Failure: The greeting function doesn't work properly.";
    });
}
exports.alicebobgreeting = alicebobgreeting;
//# sourceMappingURL=validators.js.map