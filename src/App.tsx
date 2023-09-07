import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";

let items = ["London", "Dehli", "HElsinki"];

function App() {
  const [count, setCount] = useState(0);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heding={"blah"}
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
