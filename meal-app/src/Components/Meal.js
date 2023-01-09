import { Link } from "react-router-dom";

const Meal = () => {
  return (
    <>
      <h2>Meal</h2>
      <nav style={{ padding: "1rem 0" }}>
        <Link to="/a">A</Link>
        <span style={{ padding: "0 1rem" }}>|</span>
        <Link to="/b">B</Link>
        <span style={{ padding: "0 1rem" }}>|</span>
        <Link to="/c">C</Link>
        <span style={{ padding: "0 1rem" }}>|</span>
        <Link to="/d">D</Link>
      </nav>
    </>
  );
};

export default Meal;
