var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var displayElem = document.getElementById("display");
var a = "21";
var b = "43";
var result = a + b;
console.log(result);
if (displayElem) {
    displayElem.innerHTML = result;
}
var str = "This is demo string";
console.log(str);
var arr = ["hello", "how", "are", "you", "?"];
var join = arr.join(" ");
console.log(join);
arr.map(function (item) {
    var split = item.split(",").join("");
    console.log(item);
});
var array = ["apple", "banana", "orange"];
var resultString = array.join(", ");
function greet(person, date, hour, minutes) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), " and time is ").concat(hour, ":").concat(minutes, "!"));
}
greet("Maddison", new Date(), new Date().getHours(), new Date().getMinutes());
function personName(named, date) {
    console.log("Hello! " + named + " you are joining on " + date);
}
personName("Asfand", new Date());
function demoe(value) {
    console.log(value.toUpperCase());
}
demoe("knadsihcihw");
var x = "Hello";
x = "3";
x = "value";
console.log(x);
function printText(s, alignment) { }
printText("Hello, world", "left");
printText("G'day, mate", "center");
function compare(a, b) {
    var result = a === b ? 0 : a > b ? 1 : -1;
    console.log(result);
    return result;
}
compare("as", "kjbasbdx");
var value = "Your increment ";
console.log(value);
var buttonElem = document.getElementById("increment");
var inc = 0;
if (buttonElem) {
    buttonElem.innerHTML = inc.toString();
    buttonElem.addEventListener("click", function () {
        inc += 1;
        buttonElem.innerHTML = inc.toString();
    });
}
var obj = {
    counter: 0,
};
console.log(obj.counter);
if (obj) {
    obj.counter = 1;
    console.log(obj.counter);
}
var Role;
(function (Role) {
    Role["admin"] = "ADMIN";
    Role["user"] = "USER";
    Role["guest"] = "GUEST";
})(Role || (Role = {}));
console.log(Role.admin);
var RoleCheck = {
    admin: "ADMIN",
    user: "USER",
    guest: "GUEST",
};
console.log(typeof RoleCheck);
function checkRole(role) {
    if (role === Role.admin) {
        console.log("You have full access now!");
    }
    else {
        console.log("There isn't any role like that yet!");
    }
}
checkRole("random");
var dog = {
    run: function () { return console.log("Dog is running"); },
    swim: function () { return console.log("Dog is swimming"); },
    bark: "Woof!",
};
var fish = {
    swim: function () { return console.log("Fish is swimming!"); },
};
function action(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    else {
        return animal;
    }
}
var myFish = action(fish);
console.log(myFish);
function padLeft(padding, input) {
    if (typeof padding === "number") {
        console.log(" ".repeat(padding) + input);
        return;
    }
    return padding + input;
}
padLeft(12, "hello");
function area(shape) {
    if (shape.kind === "rectangle") {
        console.log("Rectangle area is " + shape.length * shape.width);
        return;
    }
    else if (shape.kind === "square") {
        console.log("Square area is " + Math.pow(shape.side, 2));
        return;
    }
    else if (shape.kind === "circle") {
        console.log("Circle area is " + Math.PI * Math.pow(shape.radius, 2));
        return;
    }
    else if (shape.kind === "triangle") {
        console.log("Triangle are is " + (shape.base * shape.height) / 2);
        return;
    }
    else {
        console.log("Did not find any shape like that!");
    }
    return;
}
area({ kind: "rectangle", length: 6, width: 4 });
area({ kind: "square", side: 8 });
area({ kind: "circle", radius: 5 });
area({ kind: "triangle", base: 3, height: 5 });
function checkShape(shape) {
    switch (shape.kind) {
        case "circle":
            console.debug("Circle");
            break;
        case "square":
            console.debug("Square");
            break;
        case "rectangle":
            console.debug("Rectangle");
            break;
        case "triangle":
            console.debug("Triangle");
            break;
        default:
            var exhaustCheckArea = shape;
            return exhaustCheckArea;
    }
}
checkShape({ kind: "circle", radius: 90 });
function demo2(fn) {
    fn(23);
}
function demoNumber(n) {
    console.log(n);
}
demo2(demoNumber);
function longest(a, b) {
    if (a > b) {
        console.log("Longest: ", a);
        return a;
    }
    console.log("Smallest", b);
    return b;
}
longest(21, 22);
var object = {
    id: 1,
    name: "Jade",
};
var object1 = {
    empId: 1234,
};
var rest = __assign(__assign({}, object), { object1: object1 });
console.log(rest);
function sum(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log(a + b + c);
}
sum({ b: 1, c: 3, a: 5 });
var src = [1, 2, 3];
var dst = [0];
src.forEach(function (el) {
    dst.push(el);
    console.log(dst);
});
var obe = value;
var secondValue = obe[3];
console.log("Second Value:>>>>", secondValue);
function draw(circle) {
    if (typeof circle === "string")
        return {};
    circle.kind = "circle";
    circle.radius = 12;
    console.log("Radius " + "of " + circle.kind + " is " + Math.PI * Math.pow(circle.radius, 2));
}
draw("rectangle");
// function draw(circle: Circle): string;
var user = [1, "Admin"];
console.log(user);
var id = user[0], role = user[1];
console.log(id);
console.log(role);
var user2 = [2];
function relate(arg) {
    console.log(arg.length);
    return arg;
}
function help(name) {
    var a = "Your name is set to be ";
    console.log(a + name + ", where your name length is " + name.length);
    return name;
}
help("Asfand Bilal");
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
        this.hasMask = true;
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
        this.hasNameTag = "Jade";
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.hasLegs = true;
    }
    return Animal;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.canFly = true;
    }
    return Bird;
}());
var Butterfly = /** @class */ (function (_super) {
    __extends(Butterfly, _super);
    function Butterfly() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numLegs = 6;
        _this.keeper = new BeeKeeper();
        return _this;
    }
    return Butterfly;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numLegs = 4;
        _this.keeper = new ZooKeeper();
        return _this;
    }
    return Lion;
}(Animal));
function zooScenario(c) {
    var value = new c();
    console.log(value);
    return value;
}
zooScenario(Lion).keeper.hasNameTag;
zooScenario(Butterfly).keeper.hasMask;
var k = document.querySelector("div");
var s = __spreadArray([], document.querySelectorAll("button"), true);
var ready = create(k, s);
console.log(k, s);
var myPerson = [
    { name: "Alice", age: 23, j: 8 },
    { name: "Jade", age: 33 },
    { name: "Mathew", age: 50 },
];
