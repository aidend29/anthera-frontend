import * as React from "react";
import Svg, { Defs, RadialGradient, Stop, Path } from "react-native-svg";

function SvgComponent({ width = 389.441, height = 363.85 }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 389.441 363.85"
    >
      <Defs>
        <RadialGradient
          id="prefix__a"
          cx={0.5}
          cy={0.5}
          r={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#2170FC" />
          <Stop offset={1} stopColor="#2170FC" />
        </RadialGradient>
      </Defs>
      <Path
        d="M470.423-126.711l235 229.017H673.28l-83.528-83.527L476.139-94.835l-17.472 17.472 208.5 208.5H641.43l-193.7-193.7-26.383 26.371 240.118 240.118H633.52L410.192-19.4 386.56 4.231l232.908 232.908h-29.716l-218.36-218.36-21.04 21.04L536.1 225.567h-29.769L315.979 35.215z"
        transform="translate(-315.979 126.711)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;
