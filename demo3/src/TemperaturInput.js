const scaleInfo = {
  c: "Celsius",
  f: "Farenheit",
};

const TemperatureInput = (props) => {
  const { tempChange, temp, scale } = props;

  const changeTemperature = (e) => {
    tempChange(e.target.value);
  };

  return (
    <>
      <form>
        <fieldset>
          <legend>Enter {scaleInfo[scale]} temperature </legend>
          <input
            type="text"
            value={temp}
            onChange={(e) => changeTemperature(e)}
          />
        </fieldset>
      </form>
    </>
  );
};

export default TemperatureInput;
