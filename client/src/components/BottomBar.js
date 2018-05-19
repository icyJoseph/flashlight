import React, { Component } from "react";
import FontIcon from "material-ui/FontIcon";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import { withRouter } from "react-router-dom";

import { paths } from "../constants";

const History = <FontIcon className="material-icons">history</FontIcon>;
const Flashlight = <FontIcon className="material-icons">highlight</FontIcon>;
const Add = <FontIcon className="material-icons">library_add</FontIcon>;
const Me = <FontIcon className="material-icons">person</FontIcon>;

export class BottomBar extends Component {
  select = this.select.bind(this);
  select(path) {
    return this.props.history.push(path);
  }

  getSelectedIndex = this.getSelectedIndex.bind(this);
  getSelectedIndex() {
    return paths.indexOf(this.props.location.pathname);
  }

  render() {
    const [history, flashlight, add, me] = paths;
    return (
      <Paper
        zDepth={1}
        style={{
          width: "100%",
          position: "fixed",
          zIndex: 9999,
          bottom: 0
        }}
      >
        <BottomNavigation selectedIndex={this.getSelectedIndex()}>
          <BottomNavigationItem
            label="History"
            icon={History}
            onClick={() => this.select(history)}
          />
          <BottomNavigationItem
            label="Flashlight"
            icon={Flashlight}
            onClick={() => this.select(flashlight)}
          />
          <BottomNavigationItem
            label="Add Event"
            icon={Add}
            onClick={() => this.select(add)}
          />
          <BottomNavigationItem
            label="Me"
            icon={Me}
            onClick={() => this.select(me)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default withRouter(BottomBar);
