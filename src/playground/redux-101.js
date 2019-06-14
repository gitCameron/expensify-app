import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            const resetValue = typeof action.resetValue === 'number' ? action.resetValue : 0;
            return {
                count: resetValue
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
});

store.subscribe(() => {

    console.log(store.getState());
})

// Actions - no more than an object that gets sent to the store

// string of actions: walk, stop_walking, sit, work, stop_working, etc.

// Example using count:
// I'd like to increment the count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'RESET',
    resetValue: 400
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    count: 101
});