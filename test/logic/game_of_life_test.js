import GameOfLife from '../../src/logic/game_of_life';
import { expect } from '../test_helper';

describe('GameOfLife' , () => {

  it('returns accurate neighbours for a cell', () => {
    let cellsAlive = [[1, 3], [2, 3], [3, 3], [4, 3], [4, 6], [9, 12]];
    let gol = new GameOfLife(cellsAlive);
  });

  it('toggles a cell', () => {
    let cellsAlive = [[1, 3], [2, 3], [4, 6]];
    let gol = new GameOfLife(cellsAlive);
    expect(gol.isCellAlive([1, 3])).to.be.true;
    gol.toggleCell([1, 3]);
    expect(gol.isCellAlive([1, 3])).to.be.false;
    gol.toggleCell([1, 3]);
    expect(gol.isCellAlive([1, 3])).to.be.true;

    gol.toggleCell([20, 20]);
    expect(gol.isCellAlive([1, 3])).to.be.true;
  });

  it('tells whether the cell is alive', () => {
    let cellsAlive = [[1, 3], [2, 3], [4, 6]];
    let gol = new GameOfLife(cellsAlive);
    expect(gol.isCellAlive([1, 3])).to.be.true;
    expect(gol.isCellAlive([2, 3])).to.be.true;
    expect(gol.isCellAlive([4, 6])).to.be.true;

    expect(gol.isCellAlive([3, 6])).to.be.false;
    expect(gol.isCellAlive([1, 6])).to.be.false;
    expect(gol.isCellAlive([2, 6])).to.be.false;
  });

});
