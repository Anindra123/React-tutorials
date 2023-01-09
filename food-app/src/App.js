import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodList from "./Components/FoodList";
import FoodDetails from "./Components/FoodDetails";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FoodList />} />
          <Route path="/home" element={<FoodList />} />
          <Route path="/about/:idMeal" element={<FoodDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
