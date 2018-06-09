"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var preact_router_1 = require("preact-router");
var match_1 = require("preact-router/match");
var exercises_1 = require("./exercises");
var links = [
    {
        href: "/helloworld",
        text: "Problem 1: Hello World"
    },
    {
        href: "/simplegreeting",
        text: "Problem 2: Simple Greeting"
    },
    {
        href: "/alicebobgreeting",
        text: "Problem 3: Personalized Greeting"
    }
];
var Main = function () { return (preact_1.h("div", null,
    preact_1.h("ul", null, links.map(function (link) {
        return preact_1.h("li", null,
            preact_1.h(match_1.Link, { activeClassName: "active", href: link.href }, link.text));
    })),
    preact_1.h(preact_router_1.Router, null,
        preact_1.h(exercises_1.HelloWorld, { path: "/helloworld" }),
        preact_1.h(exercises_1.SimpleGreeting, { path: "/simplegreeting", validator: "simplegreeting" }),
        preact_1.h(exercises_1.AliceBobGreeting, { path: "/alicebobgreeting", validator: "alicebobgreeting" })))); };
preact_1.render(preact_1.h(Main, null), document.body);
//# sourceMappingURL=index.js.map