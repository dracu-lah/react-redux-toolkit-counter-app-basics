import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addByTen = () => {
    dispatch({ type: "ADD_BY_TEN", payload: 10 });
  };
  const subByTen = () => {
    dispatch({ type: "SUB_BY_TEN", payload: 10 });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <>
      <h1>
        Counter :{counter}
        {"  "}
        <span>
          <button onClick={reset}>reset</button>
        </span>
      </h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={addByTen}>+ 10</button>
      <button onClick={subByTen}>- 10</button>
    </>
  );
}

export default App;
