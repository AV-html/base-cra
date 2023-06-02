import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../../store/store";
import {addCount, subCount, add100Count} from "./counter-slice";

export const CounterComponent = (() => {
    const dispatch = useDispatch()
    const count = useSelector((state: RootState) => state.counter.count)

    const handleAddCounter = () => {
        dispatch(addCount())
    };

    const handleSubCounter = () => {
        dispatch(subCount())
    };

    const handleAdd100Counter = () => {
        dispatch(add100Count(100))
    };

    return (
        <div>
            <h3>Counter</h3>
            <div>Count: {count}</div>

            <button onClick={handleAddCounter}>Add</button>
            <button onClick={handleSubCounter}>Sub</button>
            <button onClick={handleAdd100Counter}>Add 100</button>
        </div>
    );
});