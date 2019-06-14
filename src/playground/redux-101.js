import { createStore } from 'redux';


// Reducers
// Definition: actions describe the fact that something happened, but don't specify how the application's state changes in response.  This is a reducer's job.
// 1. Reducers are pure functions - the output is only determined by its input
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
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
};

const store = createStore(countReducer);

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