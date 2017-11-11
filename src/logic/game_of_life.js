export default class GameOfLife {

  constructor(seed) {
    this.cellsAlive = seed;
  }

  findNeighbours(cell) {
    let [x, y] = cell;

    let possibleNeighbours = [
      [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
      [x - 1, y], [x + 1, y],
      [x - 1,  y + 1], [x, y + 1], [x + 1, y + 1]
    ].map((cell) => cell.toString());

    return possibleNeighbours.filter((cell) => this.stringified.indexOf(cell) !== -1);
  }

  // Cache stringified cells alive for performance
  _updateMeta() {
    delete this.stringified;
    this.stringified = this.cellsAlive.map((cell) => cell.toString());
  }

  get cellsAlive() {
    return this._cellsAlive;
  }

  // Update stringified cells
  set cellsAlive(newState) {
    this._cellsAlive = newState;
    this._updateMeta();
  }

  isCellAlive(cell) {
    return this.stringified.indexOf(cell.toString()) !== -1;
  }

  toggleCell(cell) {
    let [x, y] = cell;
    let index = this.stringified.indexOf(cell.toString());
    if (index === -1) {
      // cell is not alive
      this.cellsAlive.push(cell);
    } else {
      // cell is alive - remove from alive cells
      this.cellsAlive.splice(index, 1);
    }
    this._updateMeta()
  }

  nextStep() {
    let newState = [];

    this.cellsAlive.forEach((cell) => {
      let neighbours = this.findNeighbours(cell);
      if (neighbours.length === 2 || neighbours.length === 3) {
        newState.push(cell);
      }
    });

    let allDeadNeighbours = [];
    this.cellsAlive.forEach((cell) => {
      let [x, y] = cell;
      let neighbours = [
        [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
        [x - 1, y], [x + 1, y],
        [x - 1,  y + 1], [x, y + 1], [x + 1, y + 1]
      ];
      let deadNeighbours = neighbours.filter((cell) => !this.isCellAlive(cell));

      // Now concatenate, but don't repeat
      deadNeighbours.forEach((cell) => {
        let found = allDeadNeighbours.find(([x, y]) => (x === cell[0] && y === cell[1]));
        if (!found) {
          allDeadNeighbours.push(cell);
        }
      });
    });

    allDeadNeighbours.forEach((cell) => {
      let aliveNeighbours = this.findNeighbours(cell);
      if (aliveNeighbours.length === 3) {
        newState.push(cell);
      }
    });

    this.cellsAlive = newState;
  }

}