import "./MainContent.css";

function MainContent() {
  const username: string = "Asfand";
  const age: number = 21;
  const isAdmin: boolean = true;
  const hobbies: string[] = ["Gardening", "Playing cricket"];

  const greet = (name: string, age: number): string => {
    return `Hello ${name}, you are ${age} years old`;
  };

  interface Book {
    readonly id: number;
    title: string;
    author: string;
    publishedYear?: number;
  }

  let library: Book[] = [
    {
      id: 1,
      title: "Shikwa and Jawab-e-Shikwa",
      author: "Allama Iqbal",
      publishedYear: 1913,
    },
  ];

  let userId: string | number;

  userId = "A1223";
  userId = 101;

  console.log("UserId>>>", userId);

  function padding(
    valueTop: number,
    valueRight?: number,
    valueBottom?: number,
    valueLeft?: number
  ) {
    return (
      <button
        style={{
          padding: `${valueTop}px ${valueRight}px ${valueBottom}px ${valueLeft}px`,
        }}
      >
        Hello
      </button>
    );
  }

  return (
    <>
      <div className="main_container">
        My name is <strong>{username}</strong>. I'm <strong>{age}</strong> years
        old, and I'm {isAdmin ? "admin" : "not the admin"} of this website. Some
        of my hobbies are:
        {hobbies.map((item, index) => (
          <li key={index} value={item}>
            {item}
          </li>
        ))}
        <br />
        {greet("Alice", 25)}
        <br />
        {library.map((item, index) => {
          const { title, author, publishedYear } = item;
          return (
            <p key={index}>
              The book <strong>{title}</strong>, is written by{" "}
              <strong>{author}</strong> in <strong>{publishedYear}</strong>.
            </p>
          );
        })}
        <br />
        <div>{padding(5, 10, 5, 10)}</div>
      </div>
    </>
  );
}

export default MainContent;
