import { useEffect, useState } from "react";
import Post from "./Post";
import { useSearchParams } from "react-router-dom";
const baseUrl = "http://localhost:52612/";
const TimeLine = (props) => {
  const [post, setPost] = useState(null);
  const [err, setErr] = useState(false);
  const [sParam, setSParam] = useSearchParams();
  useEffect(() => {
    fetch(`${baseUrl}api/user/GetPostWithProfileImage/Bivas`)
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
      <>
        {post
          .filter((p) => {
            let search = sParam.get("search");
            if (!search) return true;
            return p.POST_TAG.startsWith(search);
          })
          .map((p) => {
            return <Post key={p.POST_ID} {...p} />;
          })}
      </>
    );
  } else {
    data = <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Timeline</h1>
      <input
        type="text"
        value={sParam.get("search") || ""}
        onChange={(e) => {
          let search = e.target.value;
          if (search) {
            setSParam({ search });
          } else {
            setSParam({});
          }
        }}
      />
      <hr />
      {data}
    </div>
  );
};

export default TimeLine;
