import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_WEATHER':
    return [ action.payload.data, ...state ];
    // ES&, almost identical to state.concat([action.data.payload]),
    // whoch doesn't mutate the state, but return a new array where state and payload
    // are concatenated.
  }
  return state;
}
