import React, { useContext } from "react";
import { changeColor } from "./App";

function Child() {
  const { appColor } = useContext(changeColor);

  return (
    <div>
      <h1>UseContext Hook</h1>
      <div className="color" style={{ backgroundColor: appColor }}></div>
    </div>
  );
}
export default Child;
