import * as React from "react";
import Svg, { Defs, RadialGradient, Stop, Path, G } from "react-native-svg";

function SvgComponent({ width = 66.608, height = 67.958 }, props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 66.608 67.958"
      {...props}
    >
      <Defs>
        <RadialGradient
          id="prefix__a"
          cx={0.5}
          cy={0.5}
          r={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ffc1f5" />
          <Stop offset={1} stopColor="#25abf7" />
        </RadialGradient>
      </Defs>
      <Path
        d="M479.383 313.767l19.783-35.217-28.566-26.667 21.117 3.667-4.217-9.333 26.1 7.55 8.117 19.9 10.9-2.333 3.883 12.116-8.783-2.783-2.117 3.883-30.1 16v4.333z"
        transform="translate(-470.213 -245.984)"
        fill="url(#prefix__a)"
      />
      <G fill="none" stroke="#fff" strokeWidth={0.4}>
        <Path d="M62.287 25.291l-10.833 2.442 4 10.333zM55.22 37.616L43.095 7.491l-10.192 6.358zM24.87 54.766l-.633-13.917 4.433-8.117 26.758 5.642z" />
        <Path d="M24.237 40.733l.767 18.333-15.5 8.392z" />
        <Path d="M10.062 66.908l14.275-26.175-6.883 20.55zM21.554 9.516l-4.183-9.2 25.167 7.45-9.867 5.85-3.217-3z" />
        <Path d="M28.787 32.483l.558-21.575L.62 6.066z" />
        <Path d="M29.287 10.541l26.142 27.833-26.75-5.667zM57.562 34.399l4.725-8.825 4 12.108z" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
