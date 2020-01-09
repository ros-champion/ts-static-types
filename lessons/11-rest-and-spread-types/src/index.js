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
var person = {
    fullName: "Marius Schulz",
    blog: "https://blog.mariusschulz.com",
    twitter: "@mariusschulz"
};
var fullName = person.fullName, socialMedia = __rest(person, ["fullName"]);
fullName;
socialMedia;
// ============================================================
var defaultStyles = {
    fontFamily: "Arial, sans-serif",
    fontWeight: "normal"
};
var userStyles = {
    color: "#111111",
    fontWeight: 700
};
var styles = __assign(__assign({}, defaultStyles), userStyles);
// ============================================================
// Shallow copy
var todo = {
    text: "Water the flowers",
    completed: false,
    tags: ["garden"]
};
var shallowCopy = __assign({}, todo);
shallowCopy.text = "Mow the lawn";
shallowCopy.tags.push("weekend");
console.log(shallowCopy);
console.log(todo);
