import React, { useRef, useState } from 'react';

const AddUser = () => {
    const nameFocus = useRef();
    const [name, setName] = useState("");
    const [user, setUser] = useState([
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
    ])

    const onAddName = () => {
        setUser([...user, {id: user[user.length - 1].id + 1, name: name}]);
        setName("");
        nameFocus.current.focus();
    }

    const onChangehandler = (e) => {
        setName(e.target.value);
    }

    const onRemove = (e) => {
        const remove = user.filter((item) => item.id !== Number(e.target.value));
        setUser(remove);
    }

    const onKeyPressEvent = (e) => {
        if(e.key === 'Enter') {
            onAddName();
        }
    }

    return(
    <div>
        <input type="text" placeholder="이름을 입력하세요" value={name} onChange={onChangehandler} onKeyPress={onKeyPressEvent} ref={nameFocus} />
        <button onClick={onAddName}>입력</button>
        {user.map((item) => (
            <p key={item.id}><span>{item.id}. {item.name}</span> <button value={item.id} onClick={onRemove}>삭제</button></p>
        ))}
    </div>
    )
}

export default AddUser;