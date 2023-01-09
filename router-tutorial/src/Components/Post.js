const Post = (props) => {
  return (
    <>
      <div>
        <hr />
        <div>
          <h3>{props.AUTHOR}</h3>

          {props.TIMELINE_IMAGE === null ? (
            <p>{props.TIMELINE_TEXT}</p>
          ) : (
            <>
              {props.TIMELINE_TEXT === null ? "" : <p>{props.TIMELINE_TEXT}</p>}
              <img
                src={
                  props.TIMELINE_IMAGE === null
                    ? ""
                    : `data:image/png;base64,${props.TIMELINE_IMAGE}`
                }
                alt="post"
              ></img>
            </>
          )}
          <pre>{props.POST_TAG}</pre>
        </div>
        <hr />
        <br />
      </div>
    </>
  );
};
export default Post;
