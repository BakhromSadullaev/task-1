import React, { useState } from "react";
import style from "./counter.module.scss";

export const Counter = () => {
  let [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <main className={style.container}>
        <button onClick={handleDecrease}>Decrease</button>
        <h1>{count}</h1>
        <button onClick={handleIncrease}>Increase</button>
      </main>
    </div>
  );
};
