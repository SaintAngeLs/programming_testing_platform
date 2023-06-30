"use strict";
exports.__esModule = true;
var Layout_1 = require("@/components/Layout");
var react_1 = require("next-auth/react");
var Home = function () {
    var _a;
    var session = react_1.useSession().data;
    return (React.createElement(Layout_1["default"], null,
        React.createElement("main", null,
            React.createElement("h1", null,
                "Hello, ", (_a = session === null || session === void 0 ? void 0 : session.user) === null || _a === void 0 ? void 0 :
                _a.name,
                "!!!!"))));
};
exports["default"] = Home;
