const displayElem = <HTMLElement>document.getElementById("display");

let a = "21";
let b = "43";
let result = a + b;
console.log(result);

if (displayElem) {
  displayElem.innerHTML = result;
}

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const str = "This is demo string";
console.log(str);

const arr: string[] = ["hello", "how", "are", "you", "?"];

let join = arr.join(" ");
console.log(join);

arr.map((item) => {
  let split = item.split(",").join("");
  console.log(item);
});

const array = ["apple", "banana", "orange"];
const resultString = array.join(", ");

function greet(person: string, date: Date, hour: number, minutes: number) {
  console.log(
    `Hello ${person}, today is ${date.toDateString()} and time is ${hour}:${minutes}!`
  );
}

greet("Maddison", new Date(), new Date().getHours(), new Date().getMinutes());

function personName(named: unknown, date: unknown) {
  console.log("Hello! " + named + " you are joining on " + date);
}
personName("Asfand", new Date());

function demoe(value: string) {
  console.log(value.toUpperCase());
}
demoe("knadsihcihw");

let x: string = "Hello";
x = "3";
x = "value";
console.log(x);

function printText(s: string, alignment: "left" | "right" | "center") {}
printText("Hello, world", "left");
printText("G'day, mate", "center");

function compare(a: string, b: string): number {
  let result = a === b ? 0 : a > b ? 1 : -1;
  console.log(result);
  return result;
}
compare("as", "kjbasbdx");

const value: string = "Your increment ";
console.log(value);

const buttonElem = document.getElementById("increment");
let inc = 0;

if (buttonElem) {
  buttonElem.innerHTML = inc.toString();
  buttonElem.addEventListener("click", () => {
    inc += 1;
    buttonElem.innerHTML = inc.toString();
  });
}

let obj = {
  counter: 0,
};
console.log(obj.counter);

if (obj) {
  obj.counter = 1;
  console.log(obj!.counter);
}

enum Role {
  admin = "ADMIN",
  user = "USER",
  guest = "GUEST",
}

console.log(Role.admin);

const RoleCheck = {
  admin: "ADMIN",
  user: "USER",
  guest: "GUEST",
} as const;

console.log(typeof RoleCheck);

type RoleType = (typeof RoleCheck)[keyof typeof RoleCheck];

function checkRole(role: string) {
  if (role === Role.admin) {
    console.log("You have full access now!");
  } else {
    console.log("There isn't any role like that yet!");
  }
}

checkRole("random");

type Fish = {
  swim: () => void;
};

type Dog = {
  run: () => void;
  swim: () => void;
  bark: string;
};

const dog: Dog = {
  run: () => console.log("Dog is running"),
  swim: () => console.log("Dog is swimming"),
  bark: "Woof!",
};

const fish: Fish = {
  swim: () => console.log("Fish is swimming!"),
};
function action(animal: Fish | Dog) {
  if ("swim" in animal!) {
    return animal.swim();
  } else {
    return animal;
  }
}

const myFish = action(fish);
console.log(myFish);

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    console.log(" ".repeat(padding) + input);
    return;
  }
  return padding + input;
}

padLeft(12, "hello");

interface rect {
  kind: "rectangle";
  length: number;
  width: number;
}

interface sqaure {
  kind: "square";
  side: number;
}

interface circle {
  kind: "circle";
  radius: number;
}

interface triangle {
  kind: "triangle";
  base: number;
  height: number;
}

function area(shape: rect | sqaure | circle | triangle) {
  if (shape.kind === "rectangle") {
    console.log("Rectangle area is " + shape.length * shape.width);
    return;
  } else if (shape.kind === "square") {
    console.log("Square area is " + shape.side ** 2);
    return;
  } else if (shape.kind === "circle") {
    console.log("Circle area is " + Math.PI * shape.radius ** 2);
    return;
  } else if (shape.kind === "triangle") {
    console.log("Triangle are is " + (shape.base * shape.height) / 2);
    return;
  } else {
    console.log("Did not find any shape like that!");
  }
  return;
}
area({ kind: "rectangle", length: 6, width: 4 });
area({ kind: "square", side: 8 });
area({ kind: "circle", radius: 5 });
area({ kind: "triangle", base: 3, height: 5 });

type Shapes = circle | sqaure | rect | triangle;

function checkShape(shape: Shapes) {
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
      const exhaustCheckArea: never = shape;
      return exhaustCheckArea;
  }
}
checkShape({ kind: "circle", radius: 90 });

function demo2(fn: (b: number) => void) {
  fn(23);
}

function demoNumber(n: number) {
  console.log(n);
}

demo2(demoNumber);

function longest(a: number, b: number): number {
  if (a > b) {
    console.log("Longest: ", a);
    return a;
  }
  console.log("Smallest", b);
  return b;
}
longest(21, 22);

let object: object = {
  id: 1,
  name: "Jade",
};
let object1: object = {
  empId: 1234,
};

let rest = { ...object, object1 };
console.log(rest);

function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}

sum({ b: 1, c: 3, a: 5 });

const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => {
  dst.push(el);
  console.log(dst);
});

interface Shape {
  [index: number]: string;
}

const obe: Shape = value;
const secondValue = obe[3];
console.log("Second Value:>>>>", secondValue);

interface Dictionary {
  length: number;
  name: number;
  [index: string]: number;
}

interface Radius {
  radius?: number;
}
interface Kind {
  kind: string;
}
type Val = string;

type Circle = (Radius & Kind) | string;
function draw(circle: Circle) {
  if (typeof circle === "string") return {};
  circle.kind = "circle";
  circle.radius = 12;
  console.log(
    "Radius " + "of " + circle.kind + " is " + Math.PI * circle.radius ** 2
  );
}
draw("rectangle");
// function draw(circle: Circle): string;

const user: [number, string?] = [1, "Admin"];
console.log(user);

let [id, role] = user;
console.log(id);
console.log(role);

const user2 = [2];

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

function relate<Type>(arg: Array<Type>): Type[] {
  console.log(arg.length);
  return arg;
}

interface lengthofCharacters {
  length: number;
}

function help<Type extends lengthofCharacters>(name: Type): Type {
  const a: string = "Your name is set to be ";
  console.log(a + name + ", where your name length is " + name.length);
  return name;
}

help("Asfand Bilal");

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  hasNameTag: string = "Jade";
}

class Animal {
  hasLegs: boolean = true;
}

class Bird {
  canFly: boolean = true;
}

class Butterfly extends Animal {
  numLegs: number = 6;
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  numLegs: number = 4;
  keeper: ZooKeeper = new ZooKeeper();
}

function zooScenario<A extends Animal>(c: new () => A): A {
  const value = new c();
  console.log(value);
  return value;
}

zooScenario(Lion).keeper.hasNameTag;
zooScenario(Butterfly).keeper.hasMask;

type Container<T, U> = {
  data: string;
  arr: U;
};

declare function create<T extends HTMLElement, U extends HTMLElement>(
  element: T,
  children: U[]
): Container<T, U[]>;

const k = document.querySelector("div");
const s = [...document.querySelectorAll("button")];

const ready = create(k!, s);
console.log(k, s);

const myPerson = [
  { name: "Alice", age: 23, j: 8 },
  { name: "Jade", age: 33 },
  { name: "Mathew", age: 50 },
];

type myArray = keyof (typeof myPerson)[number];

interface IdLabel {
  id: number; // some fields
}
interface NameLabel {
  name: string; // other fields
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let a = createLabel("typescript");

let b = createLabel(2.8);

let c = createLabel(Math.random() ? "hello" : 42);

type MessageOf<T> = T["message"];

type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: "string";
}

type EmailMessageContents = MessageOf<Email>;
