import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Meal from "./Components/Meal";
import Comments from "./Components/Comment";
import CommentList from "./Components/CommentList";
import CommentDetails from "./Components/CommentDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="meal" element={<Meal />} />
          <Route path="comments" element={<Comments />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem 0" }}>
                  <p>Select a post</p>
                </main>
              }
            />
            <Route path=":postId" element={<CommentList />}>
              <Route path="details">
                <Route path=":cmntId" element={<CommentDetails />} />
              </Route>
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem 0" }}>
                <p>Invalid route</p>
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
