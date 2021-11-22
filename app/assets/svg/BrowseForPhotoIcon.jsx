import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgComponent({ width, height }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
    >
      <G transform="translate(-151 -307)">
        <Circle
          cx={15}
          cy={15}
          r={15}
          transform="translate(151 307)"
          fill="#2170fc"
        />
        <Path
          d="M169.027 327H158a2 2 0 01-2-2v-7a2 2 0 012-2h3.036a3.5 3.5 0 016.929 0H171a2 2 0 012 2v5.028a4.5 4.5 0 00-3.973 3.972zM165 317a4 4 0 104 4 4 4 0 00-4-4zm-6.5 0a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zm6.5 6.4a2.4 2.4 0 112.4-2.4 2.4 2.4 0 01-2.4 2.4z"
          fill="#fff"
        />
        <Path
          d="M173 330a3 3 0 113-3 3 3 0 01-3 3zm-1.362-3.2a.389.389 0 000 .777h1.036v1.035a.389.389 0 10.777 0v-1.036h1.035a.389.389 0 100-.777h-1.035v-1.036a.389.389 0 00-.777 0v1.037z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
