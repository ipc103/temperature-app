import { FETCH_WEATHER } from '../actions/index.js';

export default function(state=[], action){
  console.log('Action received', action);
  console.log(state);
  console.log(action.payload)
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload, ...state];
    default:
      return state;
  }
}
