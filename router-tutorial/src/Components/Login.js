import "./Table.css";
import { NavLink } from "react-router-dom";
const Login = (props) => {
  return (
    <tr>
      <td>{props.USERNAME}</td>
      <td>{props.LOGIN_TIME}</td>
      <td>{props.EXPIRE_TIME}</td>
      <td>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={`/login/${props.TOKEN_KEY}`}
        >
          Show More
        </NavLink>
      </td>
    </tr>
  );
};

export default Login;
