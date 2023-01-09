const convertTemp = (temp, convert) => {
  const input = Number.parseFloat(temp);
  if (Number.isNaN(input)) return "";
  const val = convert(input);
  const convVal = Math.round(val * 1000) / 1000;
  return convVal.toString();
};

const celToFar = (num) => {
  const out = ((num - 32) * 5) / 9;
  return out;
};
const FarToCel = (num) => {
  const out = (num * 9) / 5 + 32;
  return out;
};

export { convertTemp, celToFar, FarToCel };
