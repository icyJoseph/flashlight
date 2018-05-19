import React, { PureComponent } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import { Loader } from "./Loader";
import jedi from "../constants/img/jedi.png";

export class EventPage extends PureComponent {
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
    const {
      match: {
        params: { id }
      },
      history
    } = this.props;

    if (this.state.eventInfo.length === 0) {
      return <Loader delay={600} />;
    }

    console.log(this.state.eventInfo);

    const [card] = this.state.eventInfo.filter(e => e.id === id);
    console.log(id);
    console.log(card);
    const author = card.author;
    const others = [];

    const goHome = () => {
      return history.push("/");
    };

    return (
      <Card>
        <CardHeader title={card.title} subtitle={`${author}`} avatar={jedi} />
        <CardText>{card.description}</CardText>
        <CardActions>
          <FlatButton label="Take" onClick={goHome} />
          <FlatButton label="Not now" onClick={goHome} />
        </CardActions>
        <CardTitle
          title="Who else is joining?"
          subtitle={
            others.length === 0 ? (
              <p>Nobody else</p>
            ) : (
              <ul>{others.map(({ name }) => <li key={name}>{name}</li>)}</ul>
            )
          }
        />
      </Card>
    );
  }
}

export default EventPage;
