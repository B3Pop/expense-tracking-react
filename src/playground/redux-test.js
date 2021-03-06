console.log('redux-test');

import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
        type: 'DECREMENT',
        decrementBy
});

const setCount = ({count}) => ({
        type: 'SET',
        count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Action - an object that gets sent to redux store

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch({
    type: 'RESET'
});
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 105 }));

store.dispatch({
    type: 'SET',
    count: 121
});
store.dispatch(setCount({ count: 222 }));
