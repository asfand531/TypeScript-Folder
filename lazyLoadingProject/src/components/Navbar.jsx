import { Link } from "react-router";
import "./Navbar.css";

function Navbar() {
  const navList = [
    { name: "Home", link: "" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <>
      <div className="container">
        <ul className="ul">
          {navList.map((item, index) => {
            return (
              <li key={index} className="nav-list">
                <Link to={`/${item.link}`} className="link">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
