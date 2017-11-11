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

  it('calculates the next step correctly', () => {
    let cellsAlive = [
      [1, 3], [2, 3], [3, 3],
      [10, 4], [10, 5], [9, 4], [8, 4],
      [15, 7], [15, 6], [14, 7], [14, 8], [16, 7],
      [12, 12], [12, 13], [13, 12], [13, 13]
    ];
    let gol = new GameOfLife(cellsAlive);
    gol.nextStep();
    expect(gol.cellsAlive).to.deep.equal([[2,3],[10,4],[10,5],[9,4],[15,6],[14,7],[14,8],[16,7],[12,12],[12,13],[13,12],[13,13],[2,2],[2,4],[9,3],[14,6],[16,6]]);
    gol.nextStep();
    expect(gol.cellsAlive).to.deep.equal([[2,3],[10,4],[10,5],[9,4],[14,7],[16,7],[12,12],[12,13],[13,12],[13,13],[9,3],[14,6],[16,6],[1,3],[3,3],[10,3],[9,5],[15,5],[13,7],[15,8]]);
  });

});
