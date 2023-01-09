import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const baseUrl = "http://localhost:52612/";
const LoginInfo = (props) => {
  const { tokenkey } = useParams();
  const token = String(tokenkey);
  const [login, setLogin] = useState(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    fetch(`${baseUrl}api/home/GetUserLoginInfo/${token}`)
      .then((res) => {
        setErr(false);
        return res.json();
      })
      .then((r) => {
        setErr(false);
        setLogin(r);
      })
      .catch((e) => {
        setErr(true);
      });
  });
  if (err) {
    return (
      <>
        <h1>Error getting data</h1>
      </>
    );
  }
  let data = null;
  if (login) {
    data = (
      <>
        <NavLink to={`/login`}>Go Back</NavLink>
        <table>
          <tbody>
            <tr>
              <th>Username :</th>
              <td>{login.USERNAME}</td>
            </tr>
            <tr>
              <th>Email :</th>
              <td>{login.EMAIL}</td>
            </tr>
            <tr>
              <th>Login Time :</th>
              <td>{login.LOGIN_TIME}</td>
            </tr>
            <tr>
              <th>Login Ip :</th>
              <td>{login.LOGIN_IP}</td>
            </tr>
            <tr>
              <th>Level :</th>
              <td>{login.USER_LEVEL}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  } else {
    data = <div>Loading...</div>;
  }
  return <div>{data}</div>;
};
export default LoginInfo;
