"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var validator_1 = require("./validator");
function Exercise(data) {
    return (preact_1.h("div", null,
        preact_1.h("h1", null, data.title),
        preact_1.h("p", null, data.descr),
        preact_1.h(validator_1.default, { validator: data.validator })));
}
function HelloWorld(props) {
    return Exercise({
        title: "Hello World",
        descr: "Write a program in Javascript that writes 'Hello World!' in console",
        validator: "helloworld"
    });
}
exports.HelloWorld = HelloWorld;
function SimpleGreeting(props) {
    return (preact_1.h("div", null,
        preact_1.h("h1", null, "Simple Greeting"),
        preact_1.h("p", null, "Write a function that takes a name as input and returns a greeting, like this:"),
        preact_1.h("p", null, "greeting(\"Sebastian\") --> \"Hello Sebastian!\""),
        preact_1.h(validator_1.default, { validator: "simplegreeting" })));
}
exports.SimpleGreeting = SimpleGreeting;
function AliceBobGreeting(props) {
    return (preact_1.h("div", null,
        preact_1.h("h1", null, "Personalized Greeting"),
        preact_1.h("p", null, "Rewrite the previous function (from Simple Greeting) so that it greets Alice and Bob, but for other names just writes \"Hello!\". Like this:"),
        preact_1.h("p", null, "greeting(\"Sebastian\") --> \"Hello!\""),
        preact_1.h("p", null, "greeting(\"Alice\") --> \"Hello Alice!\""),
        preact_1.h("p", null, "greeting(\"Bob\") --> \"Hello Bob!\""),
        preact_1.h(validator_1.default, { validator: "alicebobgreeting" })));
}
exports.AliceBobGreeting = AliceBobGreeting;
//# sourceMappingURL=exercises.js.map