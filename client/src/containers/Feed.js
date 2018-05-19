import React, { Fragment } from "react";
import { List } from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";

import EventCard from "../components/EventCard";

import { events, info } from "../constants";

export const Feed = () => {
  const listOfEvents = events(info);
  const [lastEvent] = listOfEvents.slice(listOfEvents.length - 1);
  const firstEvents = listOfEvents.slice(0, listOfEvents.length - 1);
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
        <Subheader>Today</Subheader>
        {firstEvents.map(e => (
          <Fragment key={e.id}>
            <EventCard {...e} /> <Divider />
          </Fragment>
        ))}
        <EventCard {...lastEvent} />
      </List>
    </div>
  );
};
export default Feed;
