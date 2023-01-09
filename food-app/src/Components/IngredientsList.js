const IngredientsList = (props) => {
  const details = props.mealDetails;
  const itemKeys = props.itemDetailsKey;
  return (
    <ul>
      {itemKeys.map((itemDetailsKey) => {
        return <li key={itemDetailsKey}>{details[itemDetailsKey]}</li>;
      })}
    </ul>
  );
};

export default IngredientsList;
