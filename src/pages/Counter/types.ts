export interface CounterState {
  readonly count: number;
}

export type INCREMENT = {
  type: 'INCREMENT';
};

export type DECREMENT = {
  type: 'DECREMENT';
};

export type INCREMENT_BY = {
  type: 'INCREMENT_BY';
  payload: number;
};

export type DECREMENT_BY = {
  type: 'DECREMENT_BY';
  payload: number;
};

export type CounterAction = INCREMENT | DECREMENT | INCREMENT_BY | DECREMENT_BY;
