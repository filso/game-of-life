import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameOfLife from '../logic/game_of_life';

import { BOARD_WIDTH, BOARD_HEIGHT } from '../const';
import { NEXT_STEP } from '../actions/types';
import { toggleCell } from '../actions';

class Board extends Component {

  constructor(props) {
    super(props);
    this.onToggleCell = this.onToggleCell.bind(this);
  }

  onToggleCell(cell) {
    this.props.toggleCell(cell);
  }

  renderTable() {
    let rows = [];
    for (let y = 0; y < BOARD_HEIGHT; y += 1) {
      rows.push(this.renderRow(y));
    }

    return (
      <table>
        <tbody>
          { rows }
        </tbody>
      </table>
    );
  }

  renderRow(y) {
    let cells = [];
    for (let x = 0; x < BOARD_WIDTH; x += 1) {
      let alive = this.props.board.isCellAlive([x, y]);
      cells.push(
        <td className={`cell ${ alive ? 'alive' : ''}`} onClick={() => this.onToggleCell([x, y])}></td>
      );
    }

    return (
      <tr>
        { cells }
      </tr>
    );
  }

  render() {
    return (
      <div>
        <div className="board">
          { this.renderTable() }
        </div>
        <div className="cells-info">
          Cells alive: {this.props.board.cellsAlive.length}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: new GameOfLife(state.board)
  };
}

export default connect(mapStateToProps, { toggleCell })(Board);
