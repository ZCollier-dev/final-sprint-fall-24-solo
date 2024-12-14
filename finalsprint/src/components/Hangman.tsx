import circuitTree from "../assets/PortfolioPics/tree-shape-of-straight-lines-like-a-computer-printed-circuit-svgrepo-com.svg";
import "../styles/Hangman.css";
import { useState, useRef, useEffect } from "react";

function Hangman() {
  const wordList = [
    "Hello",
    "Goodbye",
    "Temporal",
    "Hilarity",
    "Painless",
    "Happiness",
    "Upset",
  ];

  return (
    <main>
      <img className="treeimg" src={circuitTree} />
      <article>
        <div className="toparticle">
          <h2>Hangman Game</h2>
          <br />
          <p>
            Hangman is a game where the player guesses the letters in a word
            before the stick person fully forms. If the person is complete, the
            player loses. If the word is complete, the player wins! <br />
            <br />
            How To Play:
            <br />
            <br />
          </p>
          <ul className="ruleslist">
            <li>
              Type a letter into the guess box and press the “Guess” button to
              guess a letter.
            </li>
            <li>
              A correctly guessed letter will appear in the appropriate area. If
              the word is full, the player wins!
            </li>
            <li>
              There are 6 states of the stickman, depending on how many wrong
              guesses the player has.
            </li>
            <ul>
              <li>0 Wrong - Nothing</li>
              <li>1 Wrong - Head</li>
              <li>2 Wrong - Torso</li>
              <li>3 Wrong - Arms</li>
              <li>4 Wrong - Left Leg</li>
              <li>5 Wrong - Right Leg and Player Loses</li>
            </ul>
            <li>
              To play again after a win or loss, press the “Retry” button and a
              new word will be generated.
            </li>
          </ul>
        </div>
        <div className="mainarticle">
          <div className="hangmanbox">
            <div className="hangmanalert"></div>
            <div className="hangmanimg"></div>
            <div className="hangmanword"></div>
            <div className="hangmancontrols"></div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Hangman;
