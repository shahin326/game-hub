import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismissableAlert from "./components/DismissableAlert";
import ExpandableText from "./components/ExpandableText";

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

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "player1",
    },
  });

  const [expandableTextSetting, setExpandableTextSetting] = useState({
    showingMoreText: false,
    maxCharsToShow: 4,
    buttonLabel: "More",
  });

  const handleClick = () => {
    if (!expandableTextSetting.showingMoreText) {
      setExpandableTextSetting({
        ...expandableTextSetting,
        showingMoreText: true,
        maxCharsToShow: 50,
        buttonLabel: "Less",
      });
    } else {
      setExpandableTextSetting({
        ...expandableTextSetting,
        showingMoreText: false,
        maxCharsToShow: 4,
        buttonLabel: "More",
      });
    }
  };
  return (
    <div>
      <ExpandableText
        maxChars={expandableTextSetting.maxCharsToShow}
        buttonLabel={expandableTextSetting.buttonLabel}
        onButtonClick={handleClick}
      >
        blahdasdadwadawdawdadwawdawdawdawd
      </ExpandableText>
    </div>
  );
}

export default App;
