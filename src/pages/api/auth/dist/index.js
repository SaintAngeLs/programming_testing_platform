"use strict";
exports.__esModule = true;
var Layout_1 = require("@/components/Layout");
var react_1 = require("next-auth/react");
function Home() {
    var _a, _b;
    var session = react_1.useSession().data;
    return React.createElement(Layout_1["default"], null,
        React.createElement("div", { className: 'text-blue-900 flex justify-between' },
            React.createElement("h3", null,
                "Hello, ",
                React.createElement("b", null, (_a = session === null || session === void 0 ? void 0 : session.user) === null || _a === void 0 ? void 0 : _a.name)),
            React.createElement("div", { className: "flex g-1 bg-gray-200 text-black rounded-r-lg" },
                React.createElement("img", { src: "{session?.user?.image}", alt: "", className: 'h-6 w-5 rounded-full' }),
                React.createElement("span", { className: " px-1" }, (_b = session === null || session === void 0 ? void 0 : session.user) === null || _b === void 0 ? void 0 : _b.name))));
}
exports["default"] = Home;
