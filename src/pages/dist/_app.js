"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
require("@/styles/globals.css");
var head_1 = require("next/head");
var react_1 = require("next-auth/react");
function App(_a) {
    var Component = _a.Component, _b = _a.pageProps, session = _b.session, pageProps = __rest(_b, ["session"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "JUDGE ITLOG"),
            React.createElement("meta", { name: "description", content: "WEB application - cthe component of the educational platfrom to test the solutions of the form of the file or the code integrated." }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            React.createElement("link", { rel: "icon", href: "/JUSTICE.ico" })),
        React.createElement(react_1.SessionProvider, { session: session },
            React.createElement(Component, __assign({}, pageProps)))));
}
exports["default"] = App;
