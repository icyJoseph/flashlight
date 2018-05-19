import React from "react";
import { ListItem } from "material-ui/List";

export const HistoryCard = ({
  search,
  result,
  timestamp,
  title,
  person,
  description,
  color,
  image,
  navigateTo
}) => {
  return (
    <ListItem
      primaryText={search ? search : `${person.name} ${person.lastname}`}
      secondaryText={
        <p>
          {!search && <span style={{ color: color }}>{title}</span>}
          <br />
          {search
            ? `Found ${result.length} events with this search`
            : description}
        </p>
      }
      secondaryTextLines={2}
      onClick={navigateTo}
    />
  );
};

export default HistoryCard;
