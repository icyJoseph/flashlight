import React from "react";
import { ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";

import { cardMenu } from "./commons";

export const EventCard = ({
  title,
  author,
  description,
  image,
  color,
  left,
  navigateTo
}) => {
  const avatar = left
    ? { leftAvatar: <Avatar src={image} />, rightIconButton: cardMenu }
    : { rightAvatar: <Avatar src={image} />, leftIcon: cardMenu };

  return (
    <ListItem
      {...avatar}
      primaryText={`${author || 'someone'}`}
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
