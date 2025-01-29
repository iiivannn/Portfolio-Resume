import "./Contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-box">
        <div className="left-footer">
          <h1>Ivan Phoule I. Abillon</h1>
          <p>Full-stack Developer</p>
        </div>

        <div className="right-footer">
          <p>ivanfallabillon@gmail.com</p>
          <p>
            <a href="https://github.com/iiivannn" target="_blank">
              https://github.com/iiivannn
            </a>
          </p>
          <p>0976 - 377 - 6674</p>
        </div>
      </div>

      <p className="credits">
        Made by <b>Ivan Abillon</b>
      </p>
    </div>
  );
}
export default Contact;
