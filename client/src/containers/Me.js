import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import Checkbox from "material-ui/Checkbox";
import Toggle from "material-ui/Toggle";
import RangeSlider from "../components/RangeSlider";

export class Me extends Component {
  state = { age: [25, 35], min: 18 };

  changeHandler = values => {
    return this.setState({ age: values });
  };

  render() {
    const { age } = this.state;
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "1%",
          marginBottom: "100px"
        }}
      >
        <List>
          <Subheader>General</Subheader>
          <ListItem primaryText="Avatar" secondaryText="Change your Avatar." />
          <ListItem
            primaryText="Change Interests"
            secondaryText="These are used to sync you with events."
          />
          <ListItem
            primaryText="Age Preference"
            secondaryText={`Your choice: ${age[0]} to ${age[1]}`}
            children={
              <RangeSlider
                key="slider"
                min={18}
                max={100}
                value={age}
                onChange={this.changeHandler}
              />
            }
          />
        </List>
        <Divider />
        <List>
          <Subheader>Notifications</Subheader>
          <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Notifications"
            secondaryText="Allow notifications"
          />
          <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
          <ListItem primaryText="Vibrate" leftCheckbox={<Checkbox />} />
        </List>
        <Divider />
        <List>
          <Subheader>Priority Interruptions</Subheader>
          <ListItem primaryText="Events reminders" rightToggle={<Toggle />} />
        </List>
      </div>
    );
  }
}

export default Me;
