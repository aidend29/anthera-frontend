import * as React from "react";
import Svg, { G, Circle } from "react-native-svg";

function SvgComponent({ width = 27, height = 27, props }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27 27"
      {...props}
    >
      <G fill="none" stroke="#cfdff7">
        <Circle cx={13.5} cy={13.5} r={13.5} stroke="none" />
        <Circle cx={13.5} cy={13.5} r={13} />
      </G>
    </Svg>
  );
}

export default SvgComponent;
