import { useState } from "react";

const scales = {
  c: "Celsius",
  f: "Farenheit",
};

const Temperature = (props) => {
  const handleTemp = (e) => {
    props.onTempChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scales[props.scale]}</legend>
      <input value={props.temp} onChange={handleTemp} />
    </fieldset>
  );
};

export default Temperature;
