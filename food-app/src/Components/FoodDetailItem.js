const FoodDetailItem = (props) => {
  const mealData = props.mealDetails;
  const styleTableData = props.styleItem;
  const headingText = props.insText;
  return (
    <tr>
      <th style={styleTableData}>{headingText}</th>
      <td style={styleTableData}>{mealData}</td>
    </tr>
  );
};

export default FoodDetailItem;
