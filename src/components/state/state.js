import React from 'react';
import Count from './count';
import AddUser from './adduser';

const State = () => {


    return(
        <div>
            <h2>useState</h2>
            <p>컴포넌트에서 바뀌는 값 관리하며, 값이 바뀐 것을 감지 후 랜더링</p>
            <Count />
            <AddUser />
            <hr />
        </div>
    )
}

export default State;