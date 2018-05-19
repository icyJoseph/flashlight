import React, { Fragment } from "react";
import { List } from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import Media from "react-media";
import { GridList } from "material-ui/GridList";

import EventCard from "../components/EventCard";
import DesktopCard from "../components/DesktopCard";
import { events, info } from "../constants";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 600,
    overflowY: "auto"
  }
};

export const Feed = () => {
  const listOfEvents = events(info);
  const [lastEvent] = listOfEvents.slice(listOfEvents.length - 1);
  const firstEvents = listOfEvents.slice(0, listOfEvents.length - 1);
  return (
    <div>
      <Media
        query="(max-width: 1023px)"
        render={() => (
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
        )}
      />
      <Media
        query="(min-width: 1024px)"
        render={() => (
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: "1%",
              marginBottom: "100px"
            }}
          >
            <div style={styles.root}>
              <GridList cellHeight={120} style={styles.gridList}>
                <Subheader>Today</Subheader>
                {listOfEvents.map(event => (
                  <DesktopCard key={event.id} {...event} />
                ))}
              </GridList>
            </div>
          </div>
        )}
      />
    </div>
  );
};
export default Feed;
