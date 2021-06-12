import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            let ans = action.incBy ? action.incBy : 1;
            return { count: state.count + ans };
        case 'DEC':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const Comp = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const inc = () => {
        dispatch({ type: 'INC', incBy: 1 })
    }
    const dec = () => {
        dispatch({ type: 'DEC' })
    }

    return (
        <div>
            <h1>Count:{state.count}</h1>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}

export default Comp;