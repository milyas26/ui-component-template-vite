import { jsx as _jsx } from "react/jsx-runtime";
// eslint-disable-next-line react-refresh/only-export-components
export var AT_BUTTON_VARIANT = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
};
// eslint-disable-next-line react-refresh/only-export-components
export var variantClasses = {
    PRIMARY: "bg-green-200 hover:bg-green-400 active:bg-green-500",
    SECONDARY: "bg-blue-200 hover:bg-blue-400 active:bg-blue-500",
    TERTIARY: "bg-red-200 hover:bg-red-400 active:bg-red-500",
};
export var Button = function (_a) {
    var label = _a.label, _b = _a.variant, variant = _b === void 0 ? "PRIMARY" : _b, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, onClick = _a.onClick;
    return (_jsx("button", { className: "transition-colors px-6 py-2 rounded-md ".concat(variantClasses[variant], " ").concat(isDisabled
            ? "bg-gray-300 text-slate-600 cursor-not-allowed pointer-events-none"
            : ""), onClick: isDisabled ? onClick : undefined, children: label }));
};
