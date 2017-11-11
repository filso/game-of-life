import React, { Component } from 'react';
import { connect } from 'react-redux';
import { speedUp, speedDown, togglePause } from '../actions';

export class Controls extends Component {
  constructor(props) {
    super(props);
    this.onPause = this.onPause.bind(this);
    this.onSpeedUp = this.onSpeedUp.bind(this);
    this.onSpeedDown = this.onSpeedDown.bind(this);
  }

  onPause() {
    this.props.togglePause();
  }

  onSpeedUp() {
    this.props.speedUp();
  }

  onSpeedDown() {
    this.props.speedDown();
  }

  render() {
    let speedString = this.props.paused ? 'paused' : this.props.speed;

    return (
      <div className="controls">
        <button className="btn btn-primary toggle-pause" onClick={this.onPause}>Pause</button>
        <button className="btn btn-danger slow-down" onClick={this.onSpeedDown}>Slow down</button>
        <button className="btn btn-success speed-up" onClick={this.onSpeedUp}>Speed up</button>
        <span className="speed-indicator">{ `Speed: ${speedString}` }</span>
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

export default connect(mapStateToProps, { speedUp, speedDown, togglePause })(Controls);
