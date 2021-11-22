import * as React from "react";
import Svg, { G, Ellipse, Path, Circle } from "react-native-svg";

function SvgComponent({ width = 135, height = 93, color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 135 93"
    >
      <G transform="translate(-552 -639)">
        <G transform="translate(8 326)" fill={color}>
          <Ellipse
            cx={55.5}
            cy={39}
            rx={55.5}
            ry={39}
            transform="translate(544 313)"
          />
          <Path d="M572.408 380.415s-1.617 8.131-5.963 9.824c0 0 11.313 2.312 21.742-2s-15.779-7.824-15.779-7.824z" />
        </G>
        <G transform="translate(8 330)" fill="#fff">
          <Circle cx={5} cy={5} r={5} transform="translate(566 343)" />
          <Circle cx={5} cy={5} r={5} transform="translate(583 343)" />
          <Circle cx={5} cy={5} r={5} transform="translate(600 343)" />
        </G>
        <Ellipse
          cx={44.5}
          cy={32.5}
          rx={44.5}
          ry={32.5}
          transform="translate(598 667)"
          fill="#fff"
        />
        <G transform="translate(8 326)" fill={color}>
          <Ellipse
            cx={42.5}
            cy={29.5}
            rx={42.5}
            ry={29.5}
            transform="translate(593 344)"
          />
          <Path d="M661.855 385.561s-.311 10.848 3.507 14.259a43.817 43.817 0 01-10.524 0c-2.793-.436-4.485-2.872-6.649-1.895" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
