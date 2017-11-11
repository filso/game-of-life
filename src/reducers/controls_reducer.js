import {
  SPEED_UP,
  SPEED_DOWN,
  TOGGLE_PAUSE,
  FETCH_MESSAGE
} from '../actions/types';

let DEFAULT_STATE = {
  paused: false,
  speed: 2
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SPEED_UP:
      return { ...state, speed: state.speed + 1};
    case SPEED_DOWN:
      let newSpeed = state.speed - 1;
      if (newSpeed < 0) {
        newSpeed = 0;
      }
      return { ...state, speed: newSpeed};
    case TOGGLE_PAUSE:
      return { ...state, paused: !state.paused};
  }

  return state;
}
