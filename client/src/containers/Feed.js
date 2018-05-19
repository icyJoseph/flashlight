import React, { PureComponent, Fragment } from "react";
import { List } from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import Media from "react-media";

import EventCard from "../components/EventCard";
import DesktopCard from "../components/DesktopCard";
import { today } from "../constants";

import jedi from "../constants/img/jedi.png";
import { Loader } from "../components/Loader";

function alternate(events) {
  return events.map((info, i) => {
    return i % 2 === 0
      ? {
          ...info,
          image: jedi,
          left: true,
          id: `${i}-info.title`,
          featured: i % 3 === 0
        }
      : {
          ...info,
          image: jedi,
          id: `${i}-info.title`,
          left: false,
          featured: i % 3 === 0
        };
  });
}

export class Feed extends PureComponent {
  state = {
    eventInfo: []
  };

  componentDidMount() {
    fetch("/api/event/for-me", {
      method: "POST",
      body: JSON.stringify(this.props.user),
      headers: new Headers({ "content-type": "application/json" })
    })
      .then(res => res.json())
      .then(events => this.setState({ eventInfo: events }))
      .catch(e => console.error(e));
  }

  render() {
    const navigateTo = id => () => {
      return this.props.history.push(`/EventPage/${id}`);
    };

    if (this.state.eventInfo.length === 0) {
      return <Loader delay={600} />;
    }

    const listOfEvents = alternate(this.state.eventInfo);
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
              {firstEvents.map((e, i) => (
                <Fragment key={e.id}>
                  <EventCard
                    {...e}
                    left={i % 2 === 0}
                    navigateTo={navigateTo(e.id)}
                  />
                  <Divider />
                </Fragment>
              ))}
              <EventCard
                {...lastEvent}
                navigateTo={navigateTo(lastEvent.id)}
                left={listOfEvents.length % 2 === 0 ? false : true}
              />
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
  }
}

export default Feed;
