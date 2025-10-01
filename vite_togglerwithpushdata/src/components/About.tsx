import React from "react";
import "./About.css";

interface AboutProps {
  theme: string;
}

function About({ theme }: AboutProps): React.JSX.Element {
  const list: string[] = [
    "Create and organize tasks effortlessly",
    "Prioritize what's most important",
    "Stay on top of deadlines",
    "Boost productivity with clarity and focus",
  ];

  return (
    <div
      className={
        theme === "dark"
          ? "dark_about_main_container container"
          : "light_about_main_container container"
      }
    >
      <h2 className="heading">About Us</h2>
      <p>
        Welcome to Todoers, your simple and powerful task management companion.
        We believe staying organized shouldn't be complicated. That's why we
        created a clean and intuitive Todo platform that helps you focus on what
        truly matters—getting things done. Whether you're managing daily chores,
        planning projects, or keeping track of long-term goals, our tool gives
        you the flexibility to:
      </p>
      <br />
      <ul>
        {list.map((li, index) => {
          return (
            <li key={index} className="listItems">
              {li}
            </li>
          );
        })}
      </ul>
      <br />
      <p>
        At Todoers, our mission is to make productivity feel effortless, so you
        can spend less time stressing over tasks and more time achieving them.
        Start today and take control of your to-dos—one task at a time.
      </p>
    </div>
  );
}

export default About;
