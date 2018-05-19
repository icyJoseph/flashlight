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
  const [main] = person ? person : [{ name: "", lastname: "" }];
  return (
    <ListItem
      primaryText={search ? search : `${main.name} ${main.lastname}`}
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
