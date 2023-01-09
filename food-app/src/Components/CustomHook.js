import { useEffect, useState } from "react";

const useFoodData = (url) => {
  let [foodData, setFoodData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setFoodData(response))
      .catch((reason) => {
        alert(`Error getting data: ${reason}`);
      });
  }, [url]);

  return foodData;
};

export default useFoodData;
