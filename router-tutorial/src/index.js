import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Components/Post";
import Logins from "./Components/Logins";
import TimeLine from "./Components/TimeLine";
import Login from "./Components/Login";
import LoginInfo from "./Components/LoginInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="timeline" element={<TimeLine />} />
          <Route path="login" element={<Logins />} />
          <Route path="/login/:tokenkey" element={<LoginInfo />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Nothing found on the provided url</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
