import { useState } from "react";

function SimpleCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Simple Counter</h3>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Plus (+)</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Minus (-)
      </button>
    </div>
  );
}

export default SimpleCounter;
