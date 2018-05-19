import React, { Fragment } from "react";
import AppBar from "material-ui/AppBar";

export const TopBar = () => {
  return (
    <Fragment>
      <AppBar
        title="Flashlight"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        style={{ backgroundColor: "dodgerblue" }}
      />
    </Fragment>
  );
};

export default TopBar;
