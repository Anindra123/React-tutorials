import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const handleNameInput = (e) => {
    switch (e.target.value) {
      case "Javascript":
        setEmoji("👍");
        setName(e.target.value);
        break;
      case "Java":
        setEmoji("🤮");
        setName(e.target.value);
        break;
      case "Python":
        setEmoji("👍");
        setName(e.target.value);
        break;
      case "C#":
        setEmoji("👍");
        setName(e.target.value);
        break;
      case "C":
        setEmoji("👍");
        setName(e.target.value);
        break;
      case "C++":
        setEmoji("👍");
        setName(e.target.value);
        break;
      default:
        setEmoji("👎");
        setName(e.target.value);
        break;
    }
  };

  return (
    <div>
      <h2>{emoji}</h2>
      <p>Type your favorite programming language below :</p>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleNameInput}
        value={name}
      />
    </div>
  );
};

export default Form;
