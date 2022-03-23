import React from 'react';
import State from '../components/state/state';
import Memo from '../components/memo/memo';
import Callback from '../components/callback/callback';
import Effect from '../components/effect/effect';
import Reducer from '../components/usereducer/reducer';
import ReducerContext from '../components/contextapi/context';

const Main = () => {
    return(
        <>
            <State />
            <Memo />
            <Callback />
            <Effect />
            <Reducer />
            <ReducerContext />
        </>
    )
}

export default Main;