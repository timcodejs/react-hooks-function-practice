import React, { useCallback, useContext, useState, useRef } from 'react';
import { Context } from '../../reducer';

const AddState = () => {
    const { user, userDispatch } = useContext(Context);
    const [name, setName] = useState("");
    const nameFocus = useRef();
    
    const onChangehandler = useCallback((e) => {
        setName(e.target.value);
    }, []);

    const onClickhandler = useCallback(() => {
        userDispatch({ type: "INPUTUSER", id: user[user.length - 1].id + 1, name: name });
        setName("");
        nameFocus.current.focus();
    }, [userDispatch, user, name]);

    const onKeyPressEvent = useCallback((e) => {
        if(e.key === 'Enter') {
            onClickhandler();
        }
    }, [onClickhandler]);

    return(
        <div>
            <input type="text" placeholder="이름을 입력하세요" value={name} onChange={onChangehandler} onKeyPress={onKeyPressEvent} ref={nameFocus} />
            <button onClick={onClickhandler}>입력</button>
        </div>
    )
}

export default AddState;