import "./App.css";
import { Outlet, Link } from "react-router-dom";
import TimeLine from "./Components/TimeLine";

function App() {
  return (
    <div>
      <h1>IDEA-X</h1>
      <nav>
        <Link to="/timeline">Timeline</Link> | <Link to="/login">Login</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
