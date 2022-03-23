import React, { useCallback, useState } from 'react';

const Callback = () => {
    const [color, setColor] = useState("red");

    const onChangeRed = useCallback(() => {
        setColor("red");
        console.log(`useCallback : 색상이 ${color}로 변경되었습니다.`);
    }, [color]);

    const onChangeBlue = useCallback(() => {
        setColor("blue");
        console.log(`useCallback : 색상이 ${color}로 변경되었습니다.`);
    }, [color]);

    const onChangeGreen = useCallback(() => {
        setColor("green");
        console.log(`useCallback : 색상이 ${color}로 변경되었습니다.`);
    }, [color]);

    return(
        <div>
            <h2>useCallback</h2>
            <p>특정 함수를 새로 만들지 않고 재사용</p>
            <input type="text" value={color} style={{color}} readOnly />
            <button onClick={onChangeRed}>Red</button>
            <button onClick={onChangeBlue}>Blue</button>
            <button onClick={onChangeGreen}>Green</button>
            <hr />
        </div>
    )
}

export default Callback;