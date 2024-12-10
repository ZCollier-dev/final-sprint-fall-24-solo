import "../styles/CodeBox.css";
import circuitTree from "../assets/PortfolioPics/tree-shape-of-straight-lines-like-a-computer-printed-circuit-svgrepo-com.svg";

import Button from "../components/Button";
import { Link } from "react-router-dom";

function HangmanCode() {
  return (
    <main>
      <img className="treeimg" src={circuitTree} />
      <article>
        <h2>Code for Hangman Game</h2>
        <Link to={"/hangman"}>
          <Button name="Back To Hangman"></Button>
        </Link>
        <div className="codebox">
          <code>Code Here</code>
        </div>
      </article>
    </main>
  );
}

export default HangmanCode;
