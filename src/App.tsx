import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismissableAlert from "./components/DismissableAlert";

let items = ["London", "Dehli", "HElsinki"];

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    console.log("button clicked");
    setAlertVisible(true);
  };
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false); // false is the initial value for visibility!

  return (
    <div>
      <Button
        onClick={handleButtonClick}
        buttonClass="btn btn-primary"
        buttonLabel="button"
      ></Button>
      {alertVisible && (
        <DismissableAlert
          onClose={() => setAlertVisible(false)}
        ></DismissableAlert>
      )}
    </div>
  );
}

export default App;
