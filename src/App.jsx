import "./App.css";
import AddingToolbar from "./components/AddingToolbar";
import Clocks from "./components/Clocks";
import { useState, useRef } from "react";
import seqId from "./seq-id";

function App() {
  const [clocks, setClocks] = useState([]);
  const clocksRef = useRef([]);
  const removeClock = (id) => {
    clocksRef.current = clocksRef.current.filter((clock) => clock.id !== id);
    setClocks([...clocksRef.current]);
  };
  const addClock = (name, timezone) => {
    clocksRef.current.push({
      id: seqId.getId(),
      name: name,
      timezone: timezone,
    });
    setClocks([...clocksRef.current]);
  };
  return (
    <>
      <div className="adding-toolbar-component">
        <AddingToolbar addClock={addClock}></AddingToolbar>
      </div>
      <div className="clocks-component">
        <Clocks
          items={clocks}
          removeItem={removeClock}
        ></Clocks>
      </div>
    </>
  );
}

export default App;
