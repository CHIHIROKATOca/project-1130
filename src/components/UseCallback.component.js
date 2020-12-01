import React, { useState, useCallback } from "react";

const functions = new Set();

const UseCallback = () => {
  const [count1, setCount1] = useState(0);

  const increment1 = useCallback(() => setCount1(count1 + 1), [count1]);

  // functions.add(logName);
  functions.add(increment1);

  console.log(functions);

  return (
    <>
      <div className="button-wrapper">
        <div className="button-item">
          <button onClick={increment1} className="good-icon">
            <i class="fas fa-thumbs-up" />
          </button>
          {count1}
        </div>
        <br />
      </div>
    </>
  );
};

export default UseCallback;
