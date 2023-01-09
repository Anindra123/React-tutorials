const BoilingPointIndicator = (props) => {
  const { celsiusTemp } = props;
  if (celsiusTemp >= 100.0) return <p>Water will start boiling</p>;
  else return <p>Water will not boil</p>;
};
export default BoilingPointIndicator;
