import React, { useReducer } from "react";

export const Context = React.createContext();

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

const ContextProvider = ({ children }) => {
    const [user, userDispatch] = useReducer(userReducer, initialUser);

    return (
        <Context.Provider value={{ user, userDispatch }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;