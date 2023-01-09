import useFoodData from "./CustomHook";
import FoodItem from "./FoodItem";

const FoodList = () => {
  const foodData = useFoodData(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
  );
  if (foodData !== null) {
    const mealList = foodData["meals"];

    return (
      <table style={{ border: "5px solid black" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        {mealList.map((mealObj) => {
          return <FoodItem key={mealObj.idMeal} mealObj={mealObj} />;
        })}
      </table>
    );
  } else {
    return <div>Loading Data...</div>;
  }
};

export default FoodList;
