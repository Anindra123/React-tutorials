import { useEffect, useState } from "react";

const Clock = (props) => {
  const [time, changetime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    let id = setInterval(() => {
      changetime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <div>
      <p>Current date time is {time}</p>
    </div>
  );
};
export default Clock;
