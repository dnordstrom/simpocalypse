import { INFECT, SET_DELAY, TOGGLE_SIMULATION } from '../actions/town';

const getInitialState = () => {
  return {
    results: [],
    day: 0,
    houses: new Array(100).fill(false),
    zombies: 1,
    delay: 1500,
    paused: false
  }
};

const infectCurrentState = (state) => {
  let newState = {
    ...state,
    day: state.day + 1,
    houses: Array.from(state.houses),
    results: Array.from(state.results)
  }
  let newlyInfected = 0;

  for (let zombie = 0; zombie < state.zombies; zombie++) {
    let randomHouseNumber = Math.floor(Math.random() * state.houses.length);
    
    if (!newState.houses[randomHouseNumber]) {
      newState.houses[randomHouseNumber] = true;
      newlyInfected++;
    }
  }

  newState.zombies += newlyInfected;
  
  if (!newState.houses.includes(false)) {
    let results = Array.from(state.results);
    results.push(newState.day);

    newState = {
      ...getInitialState(),
      delay: state.delay,
      results
    }
  }

  return newState;
}

export default function town(state, action) {
  switch (action.type) {
    case INFECT:
      return infectCurrentState(state);
    case SET_DELAY:
      return { ...state, delay: action.delay };
    case TOGGLE_SIMULATION:
      return { ...state, paused: !state.paused };
    default:
      return {
        ...getInitialState(),
        results: state ? Array.from(state.results) : [],
        delay: state ? state.delay : 1500
      };
  }
}
