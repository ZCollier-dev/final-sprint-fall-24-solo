import { Outlet, Link } from "react-router-dom";
import Button from "./Button";

function Layout() {
  return (
    <>
      <header>
        <h1>ZACHARY COLLIER</h1>
        <nav>
          <Link to="/">
            <Button name="Home"></Button>
          </Link>
          <Link to="/hangman">
            <Button name="Hangman"></Button>
          </Link>
          <Link to="/about">
            <Button name="About"></Button>
          </Link>
          <Link to="/contact">
            <Button name="Contact"></Button>
          </Link>
        </nav>
        <Outlet />
      </header>
    </>
  );
}

export default Layout;
