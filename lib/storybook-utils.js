export var objectValuesToControls = function (obj, control) {
    if (control === void 0) { control = 'select'; }
    return ({
        control: control,
        options: Object.keys(obj),
    });
};
