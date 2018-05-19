import React from "react";
import { GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

const DesktopCard = ({
  id,
  title,
  person: { name = "", lastname = "" },
  image,
  featured
}) => (
  <GridTile
    key={id}
    title={title}
    subtitle={
      <span>
        with <b>{name}</b>
      </span>
    }
    cols={featured ? 2 : 1}
    rows={featured ? 2 : 1}
    actionIcon={
      <IconButton>
        <MoreVertIcon color="white" />
      </IconButton>
    }
  >
    <img src={image} alt={`${name} face`} />
  </GridTile>
);

export default DesktopCard;
