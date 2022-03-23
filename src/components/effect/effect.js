import React, { useEffect, useCallback, useState } from 'react';

const Effect = () => {
    const [color, setColor] = useState("red");

    const onChangeRed = useCallback(() => {
        setColor("red");
        console.log(`useEffect : 색상이 ${color}로 변경되었습니다.`);
    }, [color]);

    const onChangeBlue = useCallback(() => {
        setColor("blue");
        console.log(`useEffect : 색상이 ${color}로 변경되었습니다.`);
    }, [color]);

    const onChangeGreen = useCallback(() => {
        setColor("green");
        console.log(`useEffect : 색상이 ${color}로 변경되었습니다.`);
    }, [color]);

    useEffect(() => {
        console.log('useEffect : 시작합니다.');
    }, []);

    useEffect(() => {
        console.log('useEffect : 색이 변경되었습니다.');
    }, [color]); 

    return(
        <div>
            <h2>useEffect</h2>
            <p>마운트와 언마운트 시 특정 작업(함수나 이벤트)을 실행할 때 사용</p>
            <input type="text" value={color} style={{color}} readOnly />
            <button onClick={onChangeRed}>Red</button>
            <button onClick={onChangeBlue}>Blue</button>
            <button onClick={onChangeGreen}>Green</button>
            <hr />
        </div>
    )
}

export default Effect;