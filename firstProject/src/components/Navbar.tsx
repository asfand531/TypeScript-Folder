import './Navbar.css';

function Navbar() {
  const menu: Array<string> = ["Home", "Gallery", "About", "Contact"];

  return (
    <>
      <ul className="menu">
        {menu.map((item) => {
          return (
            <li key={item} value={item} className="list">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Navbar;
