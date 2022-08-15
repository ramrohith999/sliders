import React from "react";
//import "./styles.css";
import cx from "classnames";
import "./switchgstyle.css";

//export default function App() {
const Switchg = ({ rounded = false, isToggled, onToggle }) => {
  const sliderCX = cx("slider", {
    rounded: rounded
  });
  return (
    <div className="App">
      <label className="switch">Good
        <input type="checkbox" checked={isToggled} onChange={onToggle} />Good
        <span className={sliderCX} />Good
      </label>
    </div>
  );
};

export default Switchg;
