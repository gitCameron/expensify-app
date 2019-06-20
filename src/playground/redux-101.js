import { createStore } from 'redux';

// Action Generators - functions that return action objects
// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// const decrementCount = (payload = {}) => ({
//     type: 'DECREMENT',
//     decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
// });

//////////////////////////////////////////////
//  Destructured action generators from above
//////////////////////////////////////////////

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

///////////////////////////////////////////////

///////////////////////////////////////////////
// Reset count prior to destructuring
// This doesn't have a parameter because it always sets count back to 0.
const resetCount = () => ({
    type: 'RESET',
});
///////////////////////////////////////////////

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

console.log(store.getState());

// Actions - no more than an object that gets sent to the store

// string of actions: walk, stop_walking, sit, work, stop_working, etc.

// Example using count:
// I'd like to increment the count
store.dispatch(incrementCount({incrementBy: 5}));

console.log(store.getState());

store.dispatch(incrementCount());

console.log(store.getState());

store.dispatch(incrementCount());

console.log(store.getState());

store.dispatch(decrementCount({decrementBy: 10}));

console.log(store.getState());

store.dispatch(decrementCount());

console.log(store.getState());

store.dispatch(resetCount());

console.log(store.getState());
