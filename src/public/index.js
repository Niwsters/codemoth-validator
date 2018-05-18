"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var validatorComponent_1 = require("./validatorComponent");
var preact_router_1 = require("preact-router");
var match_1 = require("preact-router/match");
var Main = function () { return (preact_1.h("div", null,
    preact_1.h(match_1.Link, { activeClassName: "active", href: "/validator" }, "lolpan"),
    preact_1.h(preact_router_1.Router, null,
        preact_1.h(validatorComponent_1.default, { path: "/validator" })))); };
preact_1.render(preact_1.h(Main, null), document.body);
//# sourceMappingURL=index.js.map