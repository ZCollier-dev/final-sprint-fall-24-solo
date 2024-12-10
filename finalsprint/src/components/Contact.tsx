import circuitTree from "../assets/PortfolioPics/tree-shape-of-straight-lines-like-a-computer-printed-circuit-svgrepo-com.svg";
import githubImg from "../assets/PortfolioPics/github-mark-white.svg";
import linkedinImg from "../assets/PortfolioPics/In-Blue-14@2x.png";
import emailImg from "../assets/PortfolioPics/Group 10.png";

function Contact() {
  return (
    <main>
      <img className="treeimg" src={circuitTree} />
      <article>
        <div className="toparticle">
          <h2>Contact Info</h2>
          <br />
          <div className="contactgrid">
            <a href="https://github.com/ZCollier-dev" target="_blank">
              <img src={githubImg} alt="GitHub Logo" />
              <p>https://github.com/ZCollier-dev</p>
            </a>

            <a
              href="https://www.linkedin.com/in/zachary-collier-010a42332/"
              target="_blank"
            >
              <img src={linkedinImg} alt="LinkedIn Logo" />
              <p>https://www.linkedin.com/in/zachary-collier-010a42332/</p>
            </a>
            <div>
              <img src={emailImg} alt="Email Icon" />
              <p>zacharycollier36@protonmail.com</p>
            </div>
          </div>
        </div>
        <div className="mainarticle">
          <div className="quickemailbox">
            <h3>Quick Email</h3>
            <br />
            <br />
            <form action="">
              <div className="quickemailsendername">
                <label htmlFor="sendername">Your Name</label>
                <input type="text" id="sendername" name="sendername" />
              </div>
              <div className="quickemailsenderemail">
                <label htmlFor="senderemail">Your Email</label>
                <input type="email" id="senderemail" name="senderemail" />
              </div>
              <div className="quickemailmessage">
                <label htmlFor="sendermessage">Your Message</label>
                <textarea name="sendermessage" id="sendermessage"></textarea>
              </div>
            </form>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Contact;
