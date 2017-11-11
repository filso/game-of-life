import { renderComponent , expect, $ } from '../test_helper';
import Board from '../../src/components/board';

import { BOARD_WIDTH, BOARD_HEIGHT } from '../../src/const';

let TEST_BOARD = [
  [1, 3], [2, 3], [3, 3],
  [12, 12], [12, 13], [13, 12], [13, 13]
];

describe('Board' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Board, {
      board: TEST_BOARD
    });
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('renders table with right dimensions', () => {
    let table = component.find('table');
    expect(table).to.exist;

    let trs = table.find('tr');
    // Check rows counts
    expect(trs.length).to.equal(BOARD_HEIGHT);

    // Check columns count
    trs.each((i, tr) => {
      let tds = $(tr).find('td');
      expect(tds.length).to.equal(BOARD_WIDTH);
    });
  });

  it('renders table with right amount of cells alive', () => {
    let tdAlive = component.find('.cell.alive');
    expect(tdAlive.length).to.equal(TEST_BOARD.length);
  });

  it('shows alive cells info', () => {
    let cellsInfo = component.find('.cells-info');
    expect(cellsInfo).to.contain(`Cells alive: ${TEST_BOARD.length}`);
  });
});
