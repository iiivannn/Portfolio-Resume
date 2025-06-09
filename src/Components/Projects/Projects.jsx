import "./Projects.css";
import proj1 from "../../assets/parsafe.png";
import proj2 from "../../assets/react.png";
import proj3 from "../../assets/php.png";
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
          <a href="https://supabase-users.vercel.app/" target="_blank">
            <div className="card">
              <img src={proj1} alt="" />
              <h2>ParSafe - “A Smart Parcel Receiver”</h2>
              <p>
                The web app of the automatic parcel receiver. The web app was
                made using ReactJS, Supabase, and Vercel. With various features
                like protected routes, password encryption, cookie-based session
                handling, and responsive design.
              </p>
            </div>
          </a>
        </div>
        <div className="project-item">
          <a
            href="https://architectural-website-two.vercel.app/"
            target="_blank"
          >
            <div className="card">
              <img src={proj2} alt="" />
              <h2>Architecture Website Using ReactJS</h2>
              <p>
                An E-commerce website of a mock architecture company made using
                ReactJS and SASS. Focusing mainly on the UI/UX design, the
                website used libraries to enhance the web design and experience.
              </p>
            </div>
          </a>
        </div>
        <div className="project-item">
          <div className="card">
            <img src={proj3} alt="" />
            <h2>Thesis Registration Website with PHP and HTML</h2>
            <p>
              A full stack thesis registration web app using PHP and HTML. The
              website can register thesis, add it to the database, and then be
              able to search or filter the thesis a user may want to view. The
              database used is MSSQL. It also uses a login system for
              administrators by manually adding an administrator account in the
              database.
            </p>
          </div>
        </div>
        <div className="project-item">
          <div className="card">
            <img src={proj4} alt="" />
            <h2>Money Tracker Website using Flask</h2>
            <p>
              Money Map is a full stack web app using Flask and HTML. It enables
              the users to track their money flow. It has a summary of the
              incomes and expenses as well as the remaining budget. It also has
              a section to add either an income or expense. And lastly, the user
              can view their income and expense.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
