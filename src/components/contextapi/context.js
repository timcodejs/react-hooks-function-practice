import React, { useCallback, useContext } from 'react';
import AddState from './addState';
import { Context } from '../../reducer';


const ReducerContext = () => {
    const { user, userDispatch } = useContext(Context);

    const onRemove = useCallback((e) => {
        userDispatch({type: "REMOVEUSER", id: Number(e.target.value)});
    }, [userDispatch]);

    return(
        <div>
            <h2>Context API</h2>
            <p>전역 상태 관리를 위한 도구</p>
            <AddState />
            {user.map((item) => (
                <p key={item.id}><span>{item.id}. {item.name}</span> <button value={item.id} onClick={onRemove}>삭제</button></p>
            ))}
            <hr />
        </div>
    )
}

export default ReducerContext;