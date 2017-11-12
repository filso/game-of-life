import React from 'react';
import { Board } from '../../src/components/board';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import { BOARD_WIDTH, BOARD_HEIGHT, DEFAULT_BOARD } from '../../src/const';
import GameOfLife from '../../src/logic/game_of_life';

let TEST_BOARD = DEFAULT_BOARD;

describe('Board' , () => {
  let component;

  beforeEach(() => {
    component = shallow(<Board board={new GameOfLife(TEST_BOARD)} />);
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
    trs.forEach((tr) => {
      let tds = tr.find('td');
      expect(tds.length).to.equal(BOARD_WIDTH);
    });
  });

  it('renders table with right amount of cells alive', () => {
    let tdAlive = component.find('.cell.alive');
    expect(tdAlive.length).to.equal(TEST_BOARD.length);
  });

  // it('shows alive cells info', () => {
  //   let cellsInfo = component.find('.cells-info');
  //   expect(cellsInfo.contains(`Cells alive: ${TEST_BOARD.length}`)).to.equal(true);
  // });
});
