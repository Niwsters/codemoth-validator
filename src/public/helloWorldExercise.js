"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var validator_1 = require("./validator");
function default_1(props) {
    return (preact_1.h("div", null,
        preact_1.h("h1", null, "Hello World"),
        preact_1.h("p", null, "Write a program in Javascript that writes \"Hello World!\" in console"),
        preact_1.h(validator_1.default, { validator: "helloworld" })));
}
exports.default = default_1;
//# sourceMappingURL=helloWorldExercise.js.map