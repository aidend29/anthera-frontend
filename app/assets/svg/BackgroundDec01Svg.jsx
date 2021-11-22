import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

function SvgComponent({ width = 396.441, height = 370.85 }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 396.441 370.85"
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#2170fc" />
          <Stop offset={1} stopColor="#2170fc" />
        </LinearGradient>
      </Defs>
      <Path
        d="M154.444 7l235 229.017h-32.143l-83.528-83.527L160.16 38.876l-17.472 17.472 208.5 208.5h-25.737l-193.7-193.7-26.383 26.371 240.118 240.118h-27.945L94.213 114.311l-23.632 23.631L303.489 370.85h-29.716L55.413 152.49l-21.04 21.04 185.748 185.748h-29.769L0 168.926z"
        fill="#cfdff7"
      />
      <Path
        d="M470.423-126.711l235 229.017H673.28l-83.528-83.527L476.139-94.835l-17.472 17.472 208.5 208.5H641.43l-193.7-193.7-26.383 26.371 240.118 240.118H633.52L410.192-19.4 386.56 4.231l232.908 232.908h-29.716l-218.36-218.36-21.04 21.04L536.1 225.567h-29.769L315.979 35.215z"
        transform="translate(-308.979 126.711)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;
