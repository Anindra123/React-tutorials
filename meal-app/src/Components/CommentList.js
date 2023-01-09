import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const CommentList = () => {
  const postObj = useParams();
  let [comments, setComments] = useState(null);
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${postObj.postId}/comments`
    )
      .then((res) => res.json())
      .then((res) => setComments(res));
  }, [postObj]);

  if (comments !== null) {
    return (
      <div style={{ display: "flex" }}>
        <ul
          style={{
            borderRight: "1px solid black",
            padding: "1rem",
            paddingLeft: "2rem",
          }}
        >
          {comments.map((cmnt) => {
            return (
              <li key={cmnt.id}>
                {cmnt.name}
                <span style={{ padding: "0 1rem" }}>|</span>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "",
                    };
                  }}
                  to={`/comments/${cmnt.postId}/details/${cmnt.id}`}
                >
                  Show Details
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Outlet />
      </div>
    );
  } else {
    return <p>Loading Data...</p>;
  }
};

export default CommentList;
