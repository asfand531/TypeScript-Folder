import "./MainContent.css";

function Intermediate() {
  // Interface + Class
  interface Animal {
    name: string;
    makeSound(): void;
  }
  class Dog implements Animal {
    name: string = "German Shepherd";

    constructor(name: string) {
      this.name = name;
    }

    makeSound(): void {
      console.log("Woof! Woof!");
    }
  }

  const myDog = new Dog("German Shepherd");
  myDog.makeSound();

  // Generic Function
  function wrapInArray<T>(value: T): T[] {
    return [value];
  }

  // Enum
  enum Role {
    Admin,
    User,
    Guest,
  }

  let currentRole: Role = Role.Admin;

  function checkAccess(role: Role) {
    if (role === Role.Admin) {
      console.log("Full access granted.");
    } else if (role === Role.User) {
      console.log("Limited access granted.");
    } else {
      console.log("Guest access only.");
    }
  }
  checkAccess(Role.Guest);
  checkAccess(Role.User);
  checkAccess(currentRole);

  function combine(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a + b;
    }
    throw new Error("Parameters must be both numbers or both strings.");
  }

  combine("5", "9");

  return (
    <div>
      <strong>Name:</strong> {myDog.name}
      <br />
      {wrapInArray(5)}
      {wrapInArray("Asfand")}
    </div>
  );
}

export default Intermediate;
