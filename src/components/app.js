import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from './board';
import Controls from './controls';

import { NEXT_STEP } from '../actions/types';
import { STEP_LENGTH_MILLISEC } from '../const';

export class App extends Component {

  constructor(props) {
    super(props);
    this.scheduleNextStep();
  }

  scheduleNextStep() {
    setTimeout(() => {
      if (!this.props.paused) {
        this.props.dispatch({ type: NEXT_STEP });
      }
      this.scheduleNextStep();
    }, STEP_LENGTH_MILLISEC / this.props.speed);
  }

  render() {

    return (
      <div>
        <Board />
        <Controls />
      </div>
    );
  }
}

function mapStateToProps({ controls: { paused, speed }}) {
  return {
    paused,
    speed
  };
}

export default connect(mapStateToProps)(App);
