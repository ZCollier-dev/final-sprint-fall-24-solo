import "../styles/ProgrammingLangCard.css";

import ReactLogo from "../assets/PortfolioPics/64px-React-icon.png";
import HTML5Logo from "../assets/PortfolioPics/HTML5_Logo_64.png";
import JSLogo from "../assets/PortfolioPics/JavaScript-logo.png";
import TSLogo from "../assets/PortfolioPics/ts-logo-128.svg";
import CSS3Logo from "../assets/PortfolioPics/css-3_5968242.png";
import PythonLogo from "../assets/PortfolioPics/python-logo-only.svg";

function ProgrammingLangCard(props: { name: string }) {
  if (props.name === "Python") {
    return (
      <div className="proglangcard">
        <img src={PythonLogo} alt={props.name + "Logo"} />
        <h4>{props.name}</h4>
      </div>
    );
  } else if (props.name === "HTML5") {
    return (
      <div className="proglangcard">
        <img src={HTML5Logo} alt={props.name + "Logo"} />
        <h4>{props.name}</h4>
      </div>
    );
  } else if (props.name === "CSS3") {
    return (
      <div className="proglangcard">
        <img src={CSS3Logo} alt={props.name + "Logo"} />
        <h4>{props.name}</h4>
      </div>
    );
  } else if (props.name === "JavaScript") {
    return (
      <div className="proglangcard">
        <img src={JSLogo} alt={props.name + "Logo"} />
        <h4>{props.name}</h4>
      </div>
    );
  } else if (props.name === "TypeScript") {
    return (
      <div className="proglangcard">
        <img src={TSLogo} alt={props.name + "Logo"} />
        <h4>{props.name}</h4>
      </div>
    );
  } else if (props.name === "React") {
    return (
      <div className="proglangcard">
        <img src={ReactLogo} alt={props.name + "Logo"} />
        <h4>{props.name}</h4>
      </div>
    );
  } else {
    return (
      <div className="proglangcard">
        <img src="" alt="Logo Unavailable" />
        <h4>{props.name}</h4>
      </div>
    );
  }
}

export default ProgrammingLangCard;
