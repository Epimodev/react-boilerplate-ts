import { AppThunk } from 'src/store';
import * as types from './types';

function increment(): types.INCREMENT {
  return { type: 'INCREMENT' };
}

function decrement(): types.DECREMENT {
  return { type: 'DECREMENT' };
}

function incrementBy(value: number): types.INCREMENT_BY {
  return {
    type: 'INCREMENT_BY',
    payload: value,
  };
}

function decrementBy(value: number): types.DECREMENT_BY {
  return {
    type: 'DECREMENT_BY',
    payload: value,
  };
}

function double(): AppThunk<void> {
  return (dispatch, getState) => {
    const currentValue = getState().counter.count;

    dispatch({
      type: 'INCREMENT_BY',
      payload: currentValue,
    });
  };
}

export { increment, decrement, incrementBy, decrementBy, double };
