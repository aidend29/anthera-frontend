import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

function SvgComponent({ width = 262, height = 240.25 }, props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 262.936 240.25"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ffc1f5" />
          <Stop offset={1} stopColor="#25abf7" />
        </LinearGradient>
      </Defs>
      <Path
        d="M0 165.738l63.548 63.548h26.745l-50.317-50.317L63.548 155.4 146 237.845h28.37L39.976 103.451l23.572-23.572L186.665 203h26.9L63.548 52.984l26.745-26.745L196.851 132.8h25.859l-96.45-96.45L146 16.612l86.839 86.839h30.1L157.08-2.4H0z"
        transform="translate(0 2.405)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default SvgComponent;
