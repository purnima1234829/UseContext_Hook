import { createContext, useState } from "react";
import Child from "./child";
import "./styles.css";

const changeColor = createContext();

function App() {
  const [backgroundColor, setBackgroundColor] = useState("green");
  return (
    <changeColor.Provider value={{ appColor: backgroundColor }}>
      <div className="App">
        <Child />
        <br />
        <button onClick={() => setBackgroundColor("red")}>Change Color</button>
      </div>
    </changeColor.Provider>
  );
}
export default App;
export { changeColor };
