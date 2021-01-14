import * as React from "react";
import Svg, { Defs, G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={94}
      height={94}
      viewBox="0 0 94 94"
      {...props}
    >
      <Defs></Defs>
      <G filter="url(#prefix__a)">
        <Circle
          cx={32}
          cy={32}
          r={32}
          transform="translate(15 10)"
          fill="#fff"
        />
      </G>
      <Path
        d="M52.704 24.725l-14.74 14.958a3.043 3.043 0 00-.015 4.259 2.936 2.936 0 004.196-.016l14.74-14.959a3.043 3.043 0 00.015-4.258 2.936 2.936 0 00-4.196.016z"
        fill="#ffc1f5"
      />
      <Path
        d="M56.883 54.886l-14.74-14.959a2.936 2.936 0 00-4.195-.016 3.043 3.043 0 00.015 4.259l14.74 14.959a2.936 2.936 0 004.196.015 3.043 3.043 0 00-.016-4.258z"
        fill="#ffc1f5"
      />
    </Svg>
  );
}

export default SvgComponent;
