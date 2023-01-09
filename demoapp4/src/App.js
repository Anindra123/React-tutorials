import "./App.css";
import Body from "./Components/Body";
import Calculator from "./Components/Calculator";
import Clock from "./Components/Clock";
import Form from "./Components/Form";
import Temperature from "./Components/Temperature";

function App() {
  return (
    <div>
      <Body name="Rahim" />
      <Clock />
      <Form />
      <Calculator />
    </div>
  );
}

export default App;
