import "./Projects.css";
import proj1 from "../../assets/react.png";
import proj2 from "../../assets/php.png";
import proj3 from "../../assets/thesis.png";
import proj4 from "../../assets/cs50.png";

function Projects() {
  return (
    <div className="project-wrapper">
      <div className="project-title">
        <h1>Projects.</h1>
        <div className="underline"></div>
        <p>
          Here are some of my projects throughout my web development journey.
          This includes both frontend and backend web projects.
        </p>
      </div>

      <div className="project-content">
        <div className="project-item">
          <div className="card">
            <img src={proj1} alt="" />
            <h2>Architecture Website Using ReactJS</h2>
            <p>
              Using ReactJS, I made a website with a theme of architecture. I
              used libraries such as ScrollReveal and Marquee to enhance the
              website. I also made a sequencing animation of texts and images
              using ScrollReveal to make the website more engaging.
            </p>
          </div>
        </div>
        <div className="project-item">
          <div className="card">
            <img src={proj2} alt="" />
            <h2>Thesis Registration Website with PHP and HTML</h2>
            <p>
              Here I used PHP and HTML for the whole project. The website can
              register thesis, add it to the database, and then be able to
              search or filter the thesis a user may want to view. The database
              used is MSSQL. It also uses a login system for administrators by
              manually adding an administrator account in the database.
            </p>
          </div>
        </div>
        <div className="project-item">
          <div className="card">
            <img src={proj3} alt="" />
            <h2>Login system using Flask</h2>
            <p>
              I implemented a login system using flask as well as routes. It has
              a dashboard once a user have successfully logged in.
            </p>
          </div>
        </div>
        <div className="project-item">
          <div className="card">
            <img src={proj4} alt="" />
            <h2>Money Tracker Website using Flask</h2>
            <p>
              So this website is mainly a virtual diary to track your money
              flow. It has a summary of the incomes and expenses as well as the
              remaining budget. It also has a section to add either an income or
              expense. And lastly, the user can view their income and expense.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
