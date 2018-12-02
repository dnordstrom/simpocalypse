import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import town from './town';

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    town
  });
}
