import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    const up = () => {
        setCount(count + 1);
    }
    const down = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
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

export default Count;