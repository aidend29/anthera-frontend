import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgComponent({
  width = 27,
  height = 27,
  outline = "#2170fc",
  fiill = "#2170fc",
}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27 27"
    >
      <G fill="none" stroke={outline}>
        <Circle cx={13.5} cy={13.5} r={13.5} stroke="none" />
        <Circle cx={13.5} cy={13.5} r={13} />
      </G>
      <G fill={fiill}>
        <Path d="M13.5 22.5c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9z" />
        <Path d="M13.5 5C8.813 5 5 8.813 5 13.5c0 4.687 3.813 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5C22 8.813 18.187 5 13.5 5m0-1a9.5 9.5 0 110 19 9.5 9.5 0 010-19z" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
