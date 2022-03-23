import React from 'react';
import State from '../components/state/state';
import Memo from '../components/memo/memo';
import Callback from '../components/callback/callback';
import Effect from '../components/effect/effect';

const Main = () => {
    return(
        <>
            <State />
            <Memo />
            <Callback />
            <Effect />
        </>
    )
}

export default Main;