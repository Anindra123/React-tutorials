import { Link, NavLink, Outlet } from "react-router-dom";

const Comments = () => {
  return (
    <>
      <h2>Comments</h2>
      <nav style={{ borderBottom: "1px solid black", padding: "1rem 0" }}>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
          to="/comments/1"
        >
          Post 1
        </NavLink>
        <span style={{ padding: "0 1rem" }}>|</span>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
          to="/comments/2"
        >
          Post 2
        </NavLink>
        <span style={{ padding: "0 1rem" }}>|</span>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
          to="/comments/3"
        >
          Post 3
        </NavLink>
        <span style={{ padding: "0 1rem" }}>|</span>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
          to="/comments/4"
        >
          Post 4
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Comments;
