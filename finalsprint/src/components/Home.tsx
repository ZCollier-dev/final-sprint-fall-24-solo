import circuitTree from "../assets/PortfolioPics/tree-shape-of-straight-lines-like-a-computer-printed-circuit-svgrepo-com.svg";
import githubImg from "../assets/PortfolioPics/github-mark-white.svg";
import linkedinImg from "../assets/PortfolioPics/In-Blue-14@2x.png";
import ProgrammingLangCard from "../components/ProgrammingLangCard";
import ProjectCard from "../components/ProjectCard";
import ProjectCardButtons from "../components/ProjectCardButtons";

function Home() {
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
          <div className="socialsbar">
            <a href="https://github.com/ZCollier-dev" target="_blank">
              <img src={githubImg} alt="GitHub Logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/zachary-collier-010a42332/"
              target="_blank"
            >
              <img className="linkedin" src={linkedinImg} alt="" />
            </a>
          </div>
        </div>
        <div className="mainarticle">
          <h2>Programming Languages</h2>
          <div className="programminglanggrid">
            <ProgrammingLangCard name="Python" />
            <ProgrammingLangCard name="HTML5" />
            <ProgrammingLangCard name="CSS3" />
            <ProgrammingLangCard name="JavaScript" />
            <ProgrammingLangCard name="TypeScript" />
            <ProgrammingLangCard name="React" />
          </div>
          <h2>Projects & Prior Work</h2>
          <div className="projectsgrid">
            <ProjectCard
              title="Data Farms - Weather Data Analysis"
              description="Used the Plotly React Module to display data in a website in the form of graphs."
            />
            <ProjectCardButtons
              title="Hangman Game"
              description="A game of Hangman made in React."
              tryLink="/hangman"
              codeLink="/hangman-code"
            />
          </div>
        </div>
      </article>
    </main>
  );
}

export default Home;
