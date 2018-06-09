"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var validator_1 = require("./validator");
function default_1(props) {
    return (preact_1.h("div", null,
        preact_1.h("h1", null, "Simple Greeting"),
        preact_1.h("p", null, "Write a function that takes a name as input and returns a greeting, like this:"),
        preact_1.h("p", null, "greeting(\"Sebastian\") --> \"Hello Sebastian!\""),
        preact_1.h(validator_1.default, { validator: "simplegreeting" })));
}
exports.default = default_1;
//# sourceMappingURL=simpleGreetingExercise.js.map