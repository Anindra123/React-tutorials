import FoodDetailItem from "./FoodDetailItem";
import IngredientsList from "./IngredientsList";
import FoodThumbnail from "./FoodThumbnail";

const FoodDetailView = (props) => {
  const { strMeal, strInstructions, strMealThumb } = props.mealDetailObj;
  const { details, keys } = props.detailAndKeys;

  const imgProp = {
    url: strMealThumb,
    alternate: "Food",
    img_w: "500",
    img_h: "500",
  };
  return (
    <tbody>
      <tr>
        <FoodThumbnail
          styleItem={{ border: "5px solid black", textAlign: "center" }}
          spanCol="2"
          imgObj={imgProp}
        />
      </tr>

      <FoodDetailItem
        mealDetails={strMeal}
        styleItem={{ border: "5px solid black" }}
        insText="Name"
      />

      <FoodDetailItem
        mealDetails={strInstructions}
        styleItem={{ border: "5px solid black" }}
        insText="Instruction"
      />
      <FoodDetailItem
        mealDetails={
          <IngredientsList mealDetails={details} itemDetailsKey={keys} />
        }
        styleItem={{ border: "5px solid black" }}
        insText="Ingredients"
      />
    </tbody>
  );
};

export default FoodDetailView;
