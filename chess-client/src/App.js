
import {Menu} from "./menu/menu";
import {Home} from "./home/home";
import {Game} from "./game/game";
import { render } from "react-dom";
import { Router, Link } from '@reach/router';
import 'bulma/css/bulma.min.css';

function App() {
  return (
<>
    <h1>Tutorial!</h1>
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="menu">Menu</Link>
    </nav>
    // under the `nav`
  <Router>
    <Home path="/" />
    <Menu path="/menu" />
    <Game path="/game" />
  </Router>
    </>
  );
}

export default App;
