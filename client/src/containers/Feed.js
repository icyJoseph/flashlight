import React from "react";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import Avatar from "material-ui/Avatar";
import { darkBlack } from "material-ui/styles/colors";

import { rightIconMenu } from "../components/commons";

import jedi from "../constants/img/jedi.png";

export const Feed = () => (
  <div>
    <List>
      <Subheader>Today</Subheader>
      <ListItem
        leftAvatar={<Avatar src={jedi} />}
        rightIconButton={rightIconMenu}
        primaryText="Brendan Lim"
        secondaryText={
          <p>
            <span style={{ color: darkBlack }}>Brunch this weekend?</span>
            <br />
            I&apos;ll be in your neighborhood doing errands this weekend. Do you
            want to grab brunch?
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset={true} />
      <ListItem
        leftAvatar={<Avatar src={jedi} />}
        rightIconButton={rightIconMenu}
        primaryText="me, Scott, Jennifer"
        secondaryText={
          <p>
            <span style={{ color: darkBlack }}>Summer BBQ</span>
            <br />
            Wish I could come, but I&apos;m out of town this weekend.
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset={true} />
      <ListItem
        leftAvatar={<Avatar src={jedi} />}
        rightIconButton={rightIconMenu}
        primaryText="Grace Ng"
        secondaryText={
          <p>
            <span style={{ color: darkBlack }}>Oui oui</span>
            <br />
            Do you have any Paris recs? Have you ever been?
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset={true} />
      <ListItem
        leftAvatar={<Avatar src={jedi} />}
        rightIconButton={rightIconMenu}
        primaryText="Kerem Suer"
        secondaryText={
          <p>
            <span style={{ color: darkBlack }}>Birthday gift</span>
            <br />
            Do you have any ideas what we can get Heidi for her birthday? How
            about a pony?
          </p>
        }
        secondaryTextLines={2}
      />
      <Divider inset={true} />
      <ListItem
        leftAvatar={<Avatar src={jedi} />}
        rightIconButton={rightIconMenu}
        primaryText="Raquel Parrado"
        secondaryText={
          <p>
            <span style={{ color: darkBlack }}>Recipe to try</span>
            <br />
            We should eat this: grated squash. Corn and tomatillo tacos.
          </p>
        }
        secondaryTextLines={2}
      />
    </List>
  </div>
);

export default Feed;
