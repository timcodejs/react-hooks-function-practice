import React, { useReducer } from 'react';

const CountReducer = () => {
    const [count, countDispatch] = useReducer(countReducer, 0);

    function countReducer(oldCount, action) {
        switch(action.type) {
            case "DOWN":
                return oldCount - 1;
            case "UP":
                return oldCount + 1;
            case "RESET":
                return 0;
            default:
                return oldCount;
        }
    }

    const down = () => {
        countDispatch({ type: "DOWN" });
    }
    const reset = () => {
        countDispatch({ type: "RESET" });
    }
    const up = () => {
        countDispatch({ type: "UP" });
    }
    return(
        <div>
            <button onClick={down}>-</button>
            <button onClick={reset}>0</button>
            <button onClick={up}>+</button>
            <span> {count}</span>
            <p></p>
        </div>
    )
}

export default CountReducer;