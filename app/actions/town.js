export const INFECT = 'INFECT';
export const SET_DELAY = 'SET_DELAY';
export const TOGGLE_SIMULATION = 'TOGGLE_SIMULATION';

export function infect() {
  return {
    type: INFECT
  };
}

export function setDelay(delay) {
  return {
    type: SET_DELAY,
    delay
  };
}

export function toggleSimulation() {
  return {
    type: TOGGLE_SIMULATION
  };
}