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
import { jsx as _jsx } from "react/jsx-runtime";
import { Button, AT_BUTTON_VARIANT } from ".";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: "Component/Button",
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        label: { control: "text" },
        variant: {
            control: "select",
            options: Object.values(AT_BUTTON_VARIANT),
        },
        onClick: { action: "clicked" },
    },
};
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) { return (_jsx(Button, __assign({}, args))); };
export var Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    label: "Button",
    variant: "PRIMARY",
    onClick: function () { return alert("clicking primary"); },
};
export var Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
    variant: "SECONDARY",
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    label: "Button",
    variant: "TERTIARY",
};
export var Disabled = Template.bind({});
Disabled.args = {
    label: "Button",
    isDisabled: true,
};
