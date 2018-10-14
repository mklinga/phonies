import React, { Component } from "react";

import PhoneListContainer from "./components/PhoneListContainer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Phone viewer</h1>
        </header>
        <main>
          <PhoneListContainer phones={this.props.phones} />
        </main>
      </div>
    );
  }
}
