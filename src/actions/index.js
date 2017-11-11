import {
  SPEED_UP,
  SPEED_DOWN,
  TOGGLE_PAUSE,
  TOGGLE_CELL
} from './types';

export function speedUp() {
  return {
    type: SPEED_UP
  };
}

export function speedDown() {
  return {
    type: SPEED_DOWN
  };
}

export function togglePause() {
  return {
    type: TOGGLE_PAUSE
  };
}

export function toggleCell(cell) {
  return {
    type: TOGGLE_CELL,
    cell
  };
}