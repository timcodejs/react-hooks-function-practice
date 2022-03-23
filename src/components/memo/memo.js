import React, { useMemo, useState } from 'react';

const Memo = () => {
    const [color, setColor] = useState("red");

    const onChangeRed = () => {
        setColor("red");
    }

    const onChangeBlue = () => {
        setColor("blue");
    }

    const onChangeGreen = () => {
        setColor("green");
    }

    useMemo(() => console.log(`useMemo : 색상이 ${color}로 변경되었습니다.`), [color]);

    return(
        <div>
            <h2>useMemo</h2>
            <p>연산된 값(결과)을 반환하여 재사용</p>
            <input type="text" readOnly value={color} style={{color}} />
            <button onClick={onChangeRed}>Red</button>
            <button onClick={onChangeBlue}>Blue</button>
            <button onClick={onChangeGreen}>Green</button>
            <hr />
        </div>
    )
}

export default Memo;