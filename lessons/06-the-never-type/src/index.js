var sing = function () {
    while (true) {
        console.log('Opa');
    }
};
// return undefined
var sing2 = function () {
    console.log('Opa');
};
var ShirtSize;
(function (ShirtSize) {
    ShirtSize[ShirtSize["S"] = 0] = "S";
    ShirtSize[ShirtSize["M"] = 1] = "M";
    ShirtSize[ShirtSize["L"] = 2] = "L";
    ShirtSize[ShirtSize["XL"] = 3] = "XL";
})(ShirtSize || (ShirtSize = {}));
function prettyPrint(size) {
    switch (size) {
        case ShirtSize.S: return "small";
        case ShirtSize.M: return "medium";
        case ShirtSize.L: return "large";
        case ShirtSize.XL: return "extra large";
        default: return assertNever(size);
    }
}
function assertNever(value) {
    console.log(value);
    throw Error("Unexpected value '" + value + "'");
}
