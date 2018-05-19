import React from "react";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import Checkbox from "material-ui/Checkbox";
import Toggle from "material-ui/Toggle";
import RaisedButton from "material-ui/RaisedButton";

export const Me = props => (
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
    <RaisedButton
      style={{ marginTop: "15px" }}
      onClick={() => props.history.push("/logout")}
    >
      Logout
    </RaisedButton>
  </div>
);

export default Me;
