"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var validator_view_1 = require("./validator.view");
var preact_router_1 = require("preact-router");
var match_1 = require("preact-router/match");
var Main = function () { return (preact_1.h("div", null,
    preact_1.h("ul", null,
        preact_1.h("li", null,
            preact_1.h(match_1.Link, { activeClassName: "active", href: "/helloworld" }, "Problem 1: Hello World")),
        preact_1.h("li", null,
            preact_1.h(match_1.Link, { activeClassName: "active", href: "/simplegreeting" }, "Problem 2: Simple greeting"))),
    preact_1.h(preact_router_1.Router, null,
        preact_1.h(validator_view_1.default, { path: "/helloworld", validator: "helloworld", title: "Hello World" }),
        preact_1.h(validator_view_1.default, { path: "/simplegreeting", validator: "simplegreeting", title: "Simple greeting" })))); };
preact_1.render(preact_1.h(Main, null), document.body);
//# sourceMappingURL=index.js.map