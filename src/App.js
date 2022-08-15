import React from "react";
import { useState } from "react";
import Switchg from "./Switchg";
import Switchc from "./Switchc";
import Switchf from "./Switchf";
import "./switchcstyle.css";
import "./switchgstyle.css";
import "./switchfstyle.css";

function App() {
  const good = () => {
    if (isToggled === false) {
      setIsToggled(true);
      setIsToggledd(false);
      setIsToggleddd(true);
    } else if (isToggled === true) {
      setIsToggled(false);
      setIsToggledd(true);
      setIsToggleddd(false);
    }
  };

  const cheap = () => {
    if (isToggledd === false) {
      setIsToggledd(true);
      setIsToggled(false);
      setIsToggleddd(true);
    } else if (isToggledd === true) {
      setIsToggledd(false);
      setIsToggled(true);
      setIsToggleddd(false);
    }
  };
  const [isToggled, setIsToggled] = useState(false);
  const [isToggledd, setIsToggledd] = useState(false);
  const [isToggleddd, setIsToggleddd] = useState(false);

  return (
    <div className="App">
       <Switchg
        isToggled={isToggled}
        onToggle={(() => setIsToggled(!isToggled), good)}
      />{" "}
      <br />
      <br />
      <br />
      <br />
      <Switchc
        isToggled={isToggledd}
        onToggle={(() => setIsToggledd(!isToggledd), cheap)}
      />
      <br />
      <br />
      <br />
      <br />
      <Switchf
        isToggled={isToggleddd}
        onToggle={() => setIsToggleddd(!isToggleddd)}
      />{" "}
      <br />
      <br />
    </div>
  );
}

export default App;
