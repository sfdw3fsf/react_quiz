import { useState, useReducer } from "react";
function reducer(state, action) {
  console.log(state, action)
  switch (action.type) {
    case 'inc':
      return state + 1

    case 'dec':
      return state - 1
    case 'define':
      return state = action.state;

    default:
      break;
  }
  return state + action.action

}
function DateCounter() {
  // const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [count, dispatch] = useReducer(reducer, 0)
  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: 'dec' })
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: 'inc' })
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ state: e.target.value, type: 'define' })
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));

  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default DateCounter;
