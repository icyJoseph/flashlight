import React from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export const RangeSlider = ({ ...props }) => (
  <div>
    <Range {...props} />
  </div>
);

export default RangeSlider;
