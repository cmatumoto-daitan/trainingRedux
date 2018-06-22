import { createStore } from 'redux';

const initialState = 0;

function counter(previousState = initialState, action) {
  switch (action.type) {
    case 'INCREMENT': {
      const newState = previousState + 1;
      return newState;
    }
    case 'DECREMENT': {
      const newState = previousState - 1;
      return newState;
    }
    default:
      return previousState;
  }
}

// Action Creators
function increment() {
  const INCREMENT = 'INCREMENT';
  return {
    type: INCREMENT,
  };
}
function decrement() {
  const DECREMENT = 'DECREMENT';
  return {
    type: DECREMENT,
  };
}

const store = createStore(counter);

let counterTarget = document.getElementById('count');

function render() {
  counterTarget.innerHTML = store.getState();
}

store.subscribe(render);

// dispatch actions on event listeners of clicks
document.getElementById('increment')
  .addEventListener('click', () => { store.dispatch(increment()); });
document.getElementById('decrement')
  .addEventListener('click', () => { store.dispatch(decrement()); });
