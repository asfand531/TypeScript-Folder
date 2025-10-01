function Shapes() {
  type Circle = { kind: "circle"; radius: number };
  type Square = { kind: "square"; side: number };
  type Rectangle = { kind: "rectangle"; length: number; width: number };

  type Shape = Circle | Square | Rectangle;

  let shapeType = Number(
    prompt(
      "Please choose your shape (number from 1 to 3):\n1. Circle\n2. Square\n3. Rectangle"
    )
  );

  if (shapeType === 1) {
    const circle = {
      radius: Number(prompt("Enter the radius of the circle:")),
    };
    console.log("The area of circle is ", Math.PI * circle.radius ** 2);
    return;
  } else if (shapeType === 2) {
    const square = { side: Number(prompt("Enter the side of the square:")) };
    console.log("The area of square is ", square.side ** 2);
    return;
  } else if (shapeType === 3) {
    const rectangle = {
      length: Number(prompt("Enter the length of the rectangle:")),
      width: Number(prompt("Enter the width of the rectangle:")),
    };
    console.log(
      "The area of rectangle is ",
      rectangle.length * rectangle.width
    );
    return;
  } else {
    console.log("The number must be between 1 to 3.");
  }

  function area(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return (Math.PI * shape.radius ** 2).toFixed(2);
      case "square":
        return (shape.side ** 2).toFixed(2);
      case "rectangle":
        return (shape.length * shape.width).toFixed(2);
      default:
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
  }

  return (
    <>
      <p>The area of circle is {area({ kind: "circle", radius: 2 })}</p>
      <p>The area of square is {area({ kind: "square", side: 4 })}</p>
      <p>
        The area of rectangle is{" "}
        {area({ kind: "rectangle", length: 2, width: 3 })}
      </p>
    </>
  );
}
export default Shapes;
