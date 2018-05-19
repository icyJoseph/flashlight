import React from "react";

import Divider from "material-ui/Divider";
import Login from "../containers/Login";
import RaisedButton from "material-ui/RaisedButton";

export const NotLoginSplash = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "50px"
      }}
    >
      <Login {...props} />
      <Divider style={{ marginTop: "50px", marginBottom: "50px" }} />
      <RaisedButton secondary onClick={() => props.history.push("/signup")}>
        Sign up!
      </RaisedButton>
    </div>
  );
};

export default NotLoginSplash;
