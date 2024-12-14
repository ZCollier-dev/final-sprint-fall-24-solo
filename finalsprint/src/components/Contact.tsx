import circuitTree from "../assets/PortfolioPics/tree-shape-of-straight-lines-like-a-computer-printed-circuit-svgrepo-com.svg";
import githubImg from "../assets/PortfolioPics/github-mark-white.svg";
import linkedinImg from "../assets/PortfolioPics/In-Blue-14@2x.png";
import emailImg from "../assets/PortfolioPics/Group 10.png";
import { send } from "emailjs-com";
import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [toSend, setToSend] = useState({
    sendername: "",
    senderemail: "",
    sendermessage: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send("service_y1amfoj", "template_l5wc3yb", toSend, "TyhAq8dr8vfw_DyMj")
      .then((response) => {
        console.log("SUCCESS", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED", err);
      });
  };

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
            <form onSubmit={onSubmit}>
              <div className="quickemailsendername">
                <label htmlFor="sendername">Your Name</label>
                <input
                  type="text"
                  id="sendername"
                  name="sendername"
                  value={toSend.sendername}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="quickemailsenderemail">
                <label htmlFor="senderemail">Your Email</label>
                <input
                  type="email"
                  id="senderemail"
                  name="senderemail"
                  value={toSend.senderemail}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="quickemailmessage">
                <label htmlFor="sendermessage">Your Message</label>
                <textarea
                  name="sendermessage"
                  id="sendermessage"
                  value={toSend.sendermessage}
                  onChange={handleChangeTextarea}
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Contact;
