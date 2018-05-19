import React from "react";
import Chip from "material-ui/Chip";
import { blue300 } from "material-ui/styles/colors";

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap"
  }
};

export const Interest = ({ title, shorthand }) => {
  return (
    <div style={styles.wrapper}>
      <Chip backgroundColor={blue300} style={styles.chip}>
        <span style={{ color: "white" }}>{title}</span>
      </Chip>
    </div>
  );
};

export default Interest;
