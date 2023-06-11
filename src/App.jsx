import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addByTen = () => {
    dispatch(actions.addByTen(10));
  };
  const subByTen = () => {
    dispatch(actions.subByTen(10));
  };
  const reset = () => {
    dispatch(actions.reset());
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
