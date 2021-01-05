import * as React from "react";
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";

function BackgroundDec01Svg({ width, height }, props) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 149 249"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M149 4l-39.883-40H-22v189.5L73.222 249v-32.5L31.842 175l21.438-21.5 68.3 68.5v-36l-84.752-85 24.429-24.5L121.58 137v-36l-68.3-68.5L66.74 19l76.776 77V72.5L94.16 23l18.945-19L149 40V4z"
        fill="url(#prefix__paint0_radial)"
      />
      <Defs>
        <RadialGradient
          id="prefix__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(85.5 0 0 142.5 63.5 106.5)"
        >
          <Stop stopColor="#E7C1FF" />
          <Stop offset={1} stopColor="#25ABF7" />
          <Stop offset={1} stopColor="#357EA9" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default BackgroundDec01Svg;
