import React, { useState } from "react";

function numCheck(num) {
  if (num < 1) {
    return 1;
  } else if (num > 99) {
    return 99;
  } else {
    return num;
  }
}

function CheckoutCounter({ defaultCount = 1, onDeleteClick = () => {} }) {
  const [count, setCount] = useState(defaultCount);

  return (
    <div className="checkout-counter">
      <div className="flex-row">
        <div className="counter">
          <button className="sign" 
          onClick={() => setCount((count) => numCheck(count - 1))}
          disabled={count <= 1}
          >
            -
          </button>
          <input
            type="number"
            min={1}
            max={99}
            value={count}
            onChange={(e) => setCount(numCheck(e.target.value))}
          />
          <button className="sign" 
          onClick={() => setCount((count) => numCheck(count + 1))}
          disabled={count >= 99}
          >
            +
          </button>
        </div>
        <button className="blue" onClick={() => setCount(defaultCount)}>Default value</button>
        <button className="blue delete" onClick={() => onDeleteClick()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </button>
        </div>
    </div>
    

  );
}

export default CheckoutCounter;
