import React, { Component } from 'react';
import { connect } from 'react-redux';

class Controls extends Component {
  add = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  minus = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  reset = () => {
    this.props.dispatch({ type: 'RESET' });
  };

  render() {
    return (
      <>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default connect()(Controls);
