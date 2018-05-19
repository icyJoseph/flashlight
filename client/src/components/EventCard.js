import React from "react";
import { ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";

import { cardMenu } from "./commons";

export const EventCard = ({
  title,
  person: { name = "", lastname = "" },
  description,
  image,
  color,
  left
}) => {
  const avatar = left
    ? { leftAvatar: <Avatar src={image} />, rightIcon: cardMenu }
    : { rightAvatar: <Avatar src={image} />, leftIcon: cardMenu };
  return (
    <ListItem
      {...avatar}
      primaryText={`${name} ${lastname}`}
      secondaryText={
        <p>
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
