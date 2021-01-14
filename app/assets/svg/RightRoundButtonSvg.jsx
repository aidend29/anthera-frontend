import * as React from "react";
import Svg, { Defs, G, Circle, Rect } from "react-native-svg";
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
      <G transform="translate(-238 -611)">
        <G transform="translate(238 611)" filter="url(#prefix__a)">
          <Circle
            cx={32}
            cy={32}
            r={32}
            transform="translate(15 10)"
            fill="#fff"
          />
        </G>
        <Rect
          width={27}
          height={6}
          rx={3}
          transform="rotate(45 -624.692 655.064)"
          fill="#25abf7"
        />
        <Rect
          width={27}
          height={6}
          rx={3}
          transform="rotate(-45 944.37 .862)"
          fill="#25abf7"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
