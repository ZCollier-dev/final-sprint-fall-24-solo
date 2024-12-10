import circuitTree from "../assets/PortfolioPics/tree-shape-of-straight-lines-like-a-computer-printed-circuit-svgrepo-com.svg";

function Hangman() {
  return (
    <main>
      <img className="treeimg" src={circuitTree} />
      <article>
        <div className="toparticle">
          <h2>Zachary Collier</h2>
          <h3>Junior Full-Stack Developer</h3>
          <h3>Student at Keyin College</h3>
          <br />
          <p>
            Based in the small town of St. Albans, Newfoundland & Labrador, I
            have familiarized myself with computers at a young age. <br />
            <br />
            From installing and working with Linux as a daily driver to learning
            the ins and outs of programming at Keyin College, I am always
            excited to work on a new project.
          </p>
        </div>
        <div className="mainarticle"></div>
      </article>
    </main>
  );
}

export default Hangman;
