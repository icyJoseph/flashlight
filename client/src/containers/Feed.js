import React, { Fragment } from "react";
import { List } from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import Media from "react-media";

import EventCard from "../components/EventCard";
import DesktopCard from "../components/DesktopCard";
import { events, info, today } from "../constants";

export const Feed = ({ history }) => {
  const navigateTo = id => () => {
    return history.push(`/EventPage/${id}`);
  };

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
      <Media
        query="(max-width: 1023px)"
        render={() => (
          <List>
            <Subheader>{today}</Subheader>
            {firstEvents.map(e => (
              <Fragment key={e.id}>
                <EventCard {...e} navigateTo={navigateTo(e.id)} />
                <Divider />
              </Fragment>
            ))}
            <EventCard {...lastEvent} />
          </List>
        )}
      />
      <Media
        query="(min-width: 1024px)"
        render={() => (
          <DesktopCard events={listOfEvents} navigateTo={navigateTo} />
        )}
      />
    </div>
  );
};
export default Feed;
