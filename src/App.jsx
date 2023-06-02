import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from './components/Controls';

class App extends Component {
  render() {
    const { count, name } = this.props;
    return (
      <>
        <h1> {name}</h1>
        <h2>The count is {count}</h2>
        <Controls />
      </>
    );
  }
}

//subscribing to the store - info we're requesting from the state to be passed as props
function mapStateToProps(state) {
  return { count: state.count, name: state.name };
}

export default connect(mapStateToProps)(App);
