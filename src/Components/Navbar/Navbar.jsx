import pic from "../../assets/fb-pfp.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <div className="nav-left">
            <a href="#home">
              <li>
                <img src={pic} alt="Profile Picture" />
              </li>
              <li>Ivan Abillon</li>
            </a>
          </div>
          <div className="nav-right">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
