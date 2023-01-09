import { useState } from "react";
import BoilingPointIndicator from "./BoilingPointIndicator";
import TemperatureInput from "./TemperaturInput";
import { convertTemp, celToFar, FarToCel } from "./utility";
const Calculator = () => {
  let [currTemp, setTemperature] = useState({ temperature: "", scale: "c" });

  const scale = currTemp.scale;
  const temperature = currTemp.temperature;
  const celsiusTemp =
    scale === "f" ? convertTemp(temperature, celToFar) : temperature;
  const farTemp =
    scale === "c" ? convertTemp(temperature, FarToCel) : temperature;

  const handleCelsiusChange = (temp) => {
    setTemperature({ scale: "c", temperature: temp });
  };
  const handleFarenheitChange = (temp) => {
    setTemperature({ scale: "f", temperature: temp });
  };

  return (
    <>
      <TemperatureInput
        tempChange={handleCelsiusChange}
        temp={celsiusTemp}
        scale="c"
      />
      <TemperatureInput
        tempChange={handleFarenheitChange}
        temp={farTemp}
        scale="f"
      />
      <BoilingPointIndicator celsiusTemp={parseFloat(celsiusTemp)} />
    </>
  );
};

export default Calculator;
