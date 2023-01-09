import { useState } from "react";
import { useParams } from "react-router-dom";

const CommentDetails = () => {
  const params = useParams();
  let [details, setDetails] = useState(null);

  return (
    <>
      <p>Called</p>
    </>
  );
};

export default CommentDetails;
