import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import { info } from "../constants";

export const EventPage = ({
  match: {
    params: { id }
  },
  history
}) => {
  const [card] = info.filter(e => e.id === id);
  const maker = card.person.slice(0, 1);
  const others = card.person.slice(1);

  const goHome = () => {
    return history.push("/");
  };

  return (
    <Card>
      <CardHeader
        title={card.title}
        subtitle={`${maker.name} ${maker.lastname}`}
        avatar={card.image}
      />
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
            <ul>
              {others.map(({ name, lastname }) => (
                <li key={name}>
                  {name} {lastname}
                </li>
              ))}
            </ul>
          )
        }
      />
    </Card>
  );
};

export default EventPage;
