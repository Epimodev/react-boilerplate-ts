import { combineReducers } from 'redux';
import counterReducer from 'src/pages/Counter/reducer';
import { CounterState, CounterAction } from 'src/pages/Counter/types';

interface StoreState {
  counter: CounterState;
}

type Action = CounterAction;

const reducers = combineReducers<StoreState>({
  counter: counterReducer,
});

export default reducers;
export { StoreState, Action };
