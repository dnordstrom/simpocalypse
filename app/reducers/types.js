import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type counterStateType = {
  +counter: number
};

export type townStateType = {
  +day: number,
  +zombies: number,
  +houses: boolean[]
};

export type statsStateType = {
  +averageDays: number,
  +iterations: number
};

export type Action = {
  +type: string
};

export type GetState = () => townStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
