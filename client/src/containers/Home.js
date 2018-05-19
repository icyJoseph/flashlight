import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("/api")
      .then(res => res.text())
      .then(txt => this.setState({ txt }));
  }

  render() {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <p>
          {this.state.txt ||
            "To get started, edit <code>src/App.js</code> and save to reload."}
        </p>
      </div>
    );
  }
}

export default Home;
