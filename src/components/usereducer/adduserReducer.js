import React, { useRef, useCallback, useReducer } from 'react';

const AdduserReducer = () => {
    const nameFocus = useRef();
    
    const initialName = "";
    const initialUser = [
        {
            id: 1,
            name: 'apple'
        },
        {
            id: 2,
            name: 'banana'
        },
        {
            id: 3,
            name: 'cherry'
        }
    ]

    const [name, nameDispatch] = useReducer(nameReducer, initialName);
    const [user, userDispatch] = useReducer(userReducer, initialUser);

    function nameReducer(oldName, action) {
        switch(action.type) {
            case "INPUTNAME":
                return oldName = action.name;
            default:
                return "";
        }
    }

    function userReducer(oldUser, action) {
        switch(action.type) {
            case "INPUTUSER":
                return [...oldUser, {id: action.id, name: action.name}];
            case "REMOVEUSER":
                return oldUser.filter((item) => item.id !== action.id);
            default:
                return oldUser;
        }
    }

    const onClickhandler = useCallback(() => {
        userDispatch({ type: "INPUTUSER", id: user[user.length - 1].id + 1, name: name });
        nameDispatch("");
        nameFocus.current.focus();
    }, [user, name]);

    const onChangehandler = useCallback((e) => {
        nameDispatch({ type: "INPUTNAME", name: e.target.value });
    }, []);

    const onRemove = useCallback((e) => {
        userDispatch({ type: "REMOVEUSER", id: Number(e.target.value) });
    }, []);

    const onKeyPressEvent = useCallback((e) => {
        if(e.key === 'Enter') {
            onClickhandler();
        }
    }, [onClickhandler]);

    return(
        <div>
            <input type="text" placeholder="이름을 입력하세요" value={name} onChange={onChangehandler} onKeyPress={onKeyPressEvent} ref={nameFocus} />
            <button onClick={onClickhandler}>입력</button>
            {user.map((item) => (
                <p key={item.id}><span>{item.id}. {item.name}</span> <button value={item.id} onClick={onRemove}>삭제</button></p>
            ))}
        </div>
    )
}

export default AdduserReducer;