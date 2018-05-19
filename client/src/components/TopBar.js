import React, { Fragment } from "react";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import Media from "react-media";
import { withRouter } from "react-router-dom";
import { FlashLight } from "../constants";

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
      <Media
        query="(max-width: 1023px)"
        render={() => (
          <AppBar
            title={FlashLight}
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
        )}
      />
      <Media
        query="(min-width: 1024px)"
        render={() => (
          <AppBar
            title={FlashLight}
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
              flex: 19,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center"
            }}
            style={{ backgroundColor: "dodgerblue", cursor: "pointer" }}
          />
        )}
      />
    </Fragment>
  );
};

export default withRouter(TopBar);
