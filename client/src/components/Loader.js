import React from "react";
import CircularProgress from "material-ui/CircularProgress";

export const Loader = ({ pastDelay, error }) => {
  // Handle the error state
  if (error) {
    return (
      <div
        style={{
          height: 140,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: 40
        }}
      >
        <span
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          ERROR, the request returned pizza...
        </span>
        <span
          role="img"
          aria-label="error"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          🍕
        </span>
      </div>
    );
  } else if (pastDelay) {
    // Handle the loading state
    return (
      <div
        style={{
          height: 140,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 40
        }}
      >
        <CircularProgress size={60} thickness={7} />
      </div>
    );
  } else {
    return null;
  }
};

export default Loader;
