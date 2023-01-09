import Login from "./Login";
import "./Table.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
const baseUrl = "http://localhost:52612/";
const Logins = (props) => {
  const [post, setPost] = useState(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    fetch(`${baseUrl}api/home/GetAllLoginInfo`)
      .then((res) => {
        setErr(false);
        return res.json();
      })
      .then((r) => {
        setErr(false);
        setPost(r);
      })
      .catch((e) => {
        setErr(true);
      });
  }, []);
  if (err) {
    return (
      <>
        <h1>Error getting data</h1>
      </>
    );
  }
  let data = null;
  if (post) {
    data = (
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Login Time</th>
            <th>Expire Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {post.map((p) => {
            return <Login key={p.LOGIN_ID} {...p} />;
          })}
        </tbody>
      </table>
    );
  } else {
    data = <div>Loading...</div>;
  }

  return (
    <>
      <h1>Logins</h1>
      <Outlet />
      {data}
    </>
  );
};
export default Logins;
