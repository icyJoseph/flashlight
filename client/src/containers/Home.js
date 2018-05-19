import React, { Component } from "react";
import Interest from "../components/Interest";

class Home extends Component {
  state = {
    interests: [
      { title: "Sports", shorthand: "Sp" },
      { title: "Dancing", shorthand: "Da" },
      { title: "Movies", shorthand: "Mv" }
    ]
  };

  // componentDidMount() {
  //   fetch("/api")
  //     .then(res => res.text())
  //     .then(txt => this.setState({ txt }));
  // }

  render() {
    const { interests } = this.state;
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <header>
          <h1 style={{ fontSize: "16pt", fontWeight: "lighter", margin: 5 }}>
            Who do we meet next?{" "}
            <span role="img" aria-label="next">
              ⏭
            </span>
          </h1>
        </header>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {interests.map(interest => (
            <Interest key={interest.title} {...interest} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
