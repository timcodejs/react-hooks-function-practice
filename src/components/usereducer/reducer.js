import React from 'react';
import CountReducer from './countReducer';
import AdduserReducer from './adduserReducer';

const Reducer = () => {
    return(
        <div>
            <h2>useReducer</h2>
            <p>사용했던 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있는 Hook 함수</p>
            <CountReducer />
            <AdduserReducer />
            <hr />
        </div>
    )
}

export default Reducer;