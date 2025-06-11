import "./Projects.css";
import proj1 from "../../assets/parsafe.png";
import proj2 from "../../assets/react.png";
import proj3 from "../../assets/php.png";
import proj4 from "../../assets/cs50.png";
import proj5 from "../../assets/car_website.png";
import proj6 from "../../assets/coffee_website.png";

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
              A thesis registration web app made using PHP, HTML, and MSSQL. It
              features user and administrator access control. It provides a
              modern solution in managing academic theses to be used by
              administrators as well as users or students.
            </p>
          </div>
        </div>
        <div className="project-item">
          <div className="card">
            <img src={proj4} alt="" />
            <h2>Money Tracker Website using Flask</h2>
            <p>
              MoneyMap is a money tracker web application built using Flask and
              HTML. It allows users to manage their income, expenses, and
              remaining budget.
            </p>
          </div>
        </div>

        <div className="project-item">
          <a href="https://car-website-wheat.vercel.app" target="_blank">
            <div className="card">
              <img src={proj5} alt="" />
              <h2>Car Website</h2>
              <p>
                A website design for car dealership showcasing various car deals
                and information.
              </p>
            </div>
          </a>
        </div>

        <div className="project-item">
          <a
            href="https://coffee-website-seven-indol.vercel.app"
            target="_blank"
          >
            <div className="card">
              <img src={proj6} alt="" />
              <h2>Coffee Website</h2>
              <p>
                A website made for a coffee shop that showcases the shop&apos;s
                menu and products.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
