import React, { Fragment } from "react";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import { withRouter } from "react-router-dom";

const HomeIcon = (
  <FontIcon className="material-icons" style={{ color: "#fff" }}>
    home
  </FontIcon>
);

export const TopBar = ({ history }) => {
  const navigateToHome = () => {
    return history.push("/");
  };

  return (
    <Fragment>
      <AppBar
        title="Flashlight"
        onClick={navigateToHome}
        iconElementLeft={HomeIcon}
        iconStyleLeft={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 0
        }}
        titleStyle={{
          flex: 9,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center"
        }}
        style={{ backgroundColor: "dodgerblue", cursor: "pointer" }}
      />
    </Fragment>
  );
};

export default withRouter(TopBar);
