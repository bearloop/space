import React, { useState } from "react";
import Cursor from "./components/Cursor";
import ShowComponent from "./components/ShowComponent";
import Welcome from "./components/messages/Welcome";

const WELCOME_DATA = [];

const App = () => {
  const [displayData, setDisplayData] = useState(WELCOME_DATA);

  const fun = (textInput) => {
    if (textInput.message === "Clear") {
      setDisplayData(WELCOME_DATA);
    } else {
      setDisplayData((prevData) => {
        return [...displayData, textInput];
      });
    }
  };
  return (
    <div>
      <Welcome />
      <ShowComponent items={displayData} />
      <Cursor onEnterValue={fun} items={displayData} />
    </div>
  );
};

export default App;