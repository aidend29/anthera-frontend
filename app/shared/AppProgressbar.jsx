import React from "react";
import * as Progress from "react-native-progress";

function Progressbar({
  detailsContext,
  progress,
  color,
  width,
  height,
  ...other
}) {
  return (
    <Progress.Bar
      {...other}
      color={color}
      width={width}
      height={height}
      progress={progress}
    />
  );
}

export default Progressbar;
