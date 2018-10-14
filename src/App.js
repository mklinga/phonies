import React, { Component } from "react";
import { connect } from "react-redux";

import { getPhoneList } from "./selectors";
import { fetchPhones as fetchPhonesAction } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchPhones();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Phone viewer</h1>
        </header>
        <main>List of phones...</main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  phones: getPhoneList(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPhones: () => dispatch(fetchPhonesAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
