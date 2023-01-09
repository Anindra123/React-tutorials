import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Meal App</h1>
      <nav style={{ borderBottom: "2px solid black", paddingBottom: "1rem" }}>
        <Link to="/meal">Show Meal</Link>
        <span style={{ padding: "0 1rem" }}>|</span>
        <Link to="/comments">Show Comments</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
