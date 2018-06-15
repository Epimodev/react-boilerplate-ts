import { CounterState, CounterAction } from './types';

const initialState: CounterState = {
  count: 0,
};

function reducer(state: CounterState = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'INCREMENT_BY':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'DECREMENT_BY':
      return {
        ...state,
        count: state.count - action.payload,
      };
  }
  return state;
}

export default reducer;
