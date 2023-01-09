import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import Temperature from "./Temperature";

const toCelsius = (farenheit) => {
  return ((farenheit - 32) * 5) / 9;
};
const toFarentheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temp, convert) => {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) return "";
  const out = convert(input);
  const rounded = Math.round(out * 1000) / 1000;
  return rounded.toString();
};

const Calculator = (props) => {
  const [temp, setTemp] = useState({ scale: "c", temperature: "" });
  const handleCelsius = (e) => {
    setTemp({ scale: "c", temperature: e });
  };
  const handleFarenheit = (e) => {
    setTemp({ scale: "f", temperature: e });
  };
  const scale = temp.scale;
  const celsius =
    scale === "f" ? tryConvert(temp.temperature, toCelsius) : temp.temperature;
  const farenheit =
    scale === "c"
      ? tryConvert(temp.temperature, toFarentheit)
      : temp.temperature;
  return (
    <>
      <div>
        <BoilingVerdict celsius={parseFloat(celsius)} />
        <Temperature scale="c" temp={celsius} onTempChange={handleCelsius} />
        <Temperature
          scale="f"
          temp={farenheit}
          onTempChange={handleFarenheit}
        />
      </div>
    </>
  );
};

export default Calculator;
