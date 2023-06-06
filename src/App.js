import "./styles.css";
import { useState } from "react";

import Button from "./Button";
const App = ({ value }) => {
  const [clicked, setClicked] = useState(0);

  const handleClickInc = () => {
    clicked >= 10 ? null : setClicked(clicked + 1);
  };
  function handleClickDrc() {
    clicked > 0 ? setClicked(clicked - 1) : null;
  }
  const handleClickRst = () => {
    setClicked(0);
  };

  return (
    <div>
      <Button value="Increment" onClickCustom={handleClickInc} />
      <Button value="Decrement" onClickCustom={handleClickDrc} />
      <Button value="Reset" onClickCustom={handleClickRst} />

      {<h1>{` clicked on the button ${clicked}`}</h1>}
    </div>
  );
};
export default App;
