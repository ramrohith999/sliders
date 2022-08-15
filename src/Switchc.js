import React from "react";
//import "./styles.css";
import cx from "classnames";
import "./switchcstyle.css";

//export default function App() {
const Switchc = ({ rounded = false, isToggled, onToggle }) => {
  const sliderCX = cx("slider", {
    rounded: rounded
  });
  return (
    <div className="App">
      <label className="switch">Cheap
        <input type="checkbox" checked={isToggled} onChange={onToggle} />Cheap
        <span className={sliderCX} />Cheap
      </label>
    </div>
  );
};

export default Switchc;
