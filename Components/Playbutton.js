import React from "react";
import { useState } from "react";
const Playbutton = ({ value }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };
  return (
    <div>
      <button className="playbtn" onClick={() => handleClick}>
        {value}{" "}
      </button>
      {clicked ? <h1>click is running </h1> : null}
    </div>
  );
};
export default Playbutton;
