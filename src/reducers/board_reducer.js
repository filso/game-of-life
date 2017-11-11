import {
  NEXT_STEP,
  TOGGLE_CELL
} from '../actions/types';

import { DEFAULT_BOARD } from '../const';
import GameOfLife from '../logic/game_of_life';

export default function(state = DEFAULT_BOARD, action) {
  let gol;

  switch(action.type) {
    case TOGGLE_CELL:
      gol = new GameOfLife(state);
      gol.toggleCell(action.cell);
      return gol.cellsAlive;
    case NEXT_STEP:
      gol = new GameOfLife(state);
      gol.nextStep();
      return gol.cellsAlive;
  }

  return state;
}
