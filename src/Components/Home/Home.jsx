import bg from "../../assets/home-bg.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <img src={bg} alt="Home-Background-Image" />

      <div className="content">
        <h1>Hello! I&apos;m Ivan Abillon.</h1>
        <p>
          A beginner full-stack software developer that mainly focuses on UI/UX
          design.
        </p>
        <a href="#projects">
          <button>Projects</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
