import React, { Fragment } from "react";
import { List } from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";

import HistoryCard from "../components/HistoryCard";
import { previously, HistoryData } from "../constants";

export const History = ({ history }) => {
  // const navigateTo = id => () => {
  //   return history.push(`/SearchDetail/${id}`);
  // };

  const { entries } = HistoryData;

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
      <List>
        <Subheader>{previously}</Subheader>
        {entries.map(e => (
          <Fragment key={e.id}>
            <HistoryCard {...e} />
            <Divider />
          </Fragment>
        ))}
      </List>
    </div>
  );
};
export default History;
