import React from "react";
import { ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";

import { cardMenu } from "./commons";

export const EventCard = ({
  title,
  person,
  description,
  image,
  color,
  left,
  navigateTo
}) => {
  const [{ name, lastname }] = person;
  const avatar = left
    ? { leftAvatar: <Avatar src={image} />, rightIconButton: cardMenu }
    : { rightAvatar: <Avatar src={image} />, leftIcon: cardMenu };

  return (
    <ListItem
      {...avatar}
      primaryText={`${name} ${lastname}`}
      secondaryText={
        <p onClick={navigateTo}>
          <span style={{ color: color }}>{title}</span>
          <br />
          {description}
        </p>
      }
      secondaryTextLines={2}
    />
  );
};

export default EventCard;
