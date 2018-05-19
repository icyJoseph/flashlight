import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import Subheader from "material-ui/Subheader";

import { today } from "../constants";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 500
  }
};

const DesktopCard = ({ events, navigateTo }) => {
  return (
    <div style={styles.root}>
      <GridList cellHeight={120} padding={1} style={styles.gridList} cols={2}>
        <Subheader>{today}</Subheader>
        {events.map(e => {
          const [{ name, lastname }] = e.person;
          return (
            <GridTile
              key={e.id}
              title={e.title}
              subtitle={
                <span>
                  with{" "}
                  <b>
                    {name} {lastname}
                  </b>
                </span>
              }
              cols={e.featured ? 2 : 1}
              rows={e.featured ? 2 : 1}
              onClick={navigateTo(e.id)}
            >
              <img src={e.image} alt={`${name} face`} />
            </GridTile>
          );
        })}
      </GridList>
    </div>
  );
};
export default DesktopCard;
