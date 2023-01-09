import FoodThumbnail from "./FoodThumbnail";
import { Link } from "react-router-dom";
const FoodItem = (props) => {
  const { strMeal, strCategory, idMeal, strMealThumb } = props.mealObj;
  const imgProp = {
    url: strMealThumb,
    alternate: "Food",
    img_w: "80",
    img_h: "80",
  };
  const setBorder = {
    border: "5px solid black",
  };
  return (
    <tbody>
      <tr>
        <td style={setBorder}>{idMeal}</td>
        <FoodThumbnail styleItem={setBorder} imgObj={imgProp} />
        <td style={setBorder}>{strMeal}</td>
        <td style={setBorder}>{strCategory}</td>
        <td style={setBorder}>
          <Link to={`/about/${idMeal}`}>See Instruction</Link>
        </td>
      </tr>
    </tbody>
  );
};

export default FoodItem;
