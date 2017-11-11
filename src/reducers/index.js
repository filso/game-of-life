import { combineReducers } from 'redux';
import controlsReducer from './controls_reducer';
import boardReducer from './board_reducer';

const rootReducer = combineReducers({
  board: boardReducer,
  controls: controlsReducer
});

export default rootReducer;
