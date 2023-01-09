import { Link, useParams } from "react-router-dom";
import FoodDetailView from "./FoodDetailView";
import useFoodData from "./CustomHook";
const FoodDetails = () => {
  const { idMeal } = useParams();
  const foodDetails = useFoodData(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );

  if (foodDetails !== null) {
    const mealDetails = foodDetails["meals"][0];
    const mealDetailsKeys = Object.keys(foodDetails["meals"][0]);
    const instructionKeys = mealDetailsKeys.filter((value) => {
      if (
        value.match(/strIngredient/) &&
        mealDetails[value] !== "" &&
        mealDetails[value] !== null
      ) {
        return value;
      }
      return null;
    });
    const mealDetailProp = {
      details: mealDetails,
      keys: instructionKeys,
    };
    return (
      <div>
        <Link to={"/"} style={{ fontSize: "2rem" }}>
          Go Back
        </Link>
        <br />
        <hr />
        <table>
          <FoodDetailView
            key={mealDetails.idMeal}
            mealDetailObj={mealDetails}
            detailAndKeys={mealDetailProp}
          />
        </table>
      </div>
    );
  } else {
    return <div>Loading Data</div>;
  }
};

export default FoodDetails;
