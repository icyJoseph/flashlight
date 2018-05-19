import React from "react";
import CircularProgress from "material-ui/CircularProgress";

export const Loader = ({ pastDelay, error }) => {
  // Handle the error state
  if (error) {
    return (
      <div>
        I have failed... Counting infinite monkeys now...
        <CircularProgress size={40} thickness={7} />
      </div>
    );
  } else if (pastDelay) {
    // Handle the loading state
    return (
      <div>
        <CircularProgress size={60} thickness={7} />
      </div>
    );
  } else {
    return null;
  }
};

export default Loader;
