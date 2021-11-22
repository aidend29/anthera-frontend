import * as React from "react";
import Svg, { G, Rect } from "react-native-svg";
import { cssVariables } from "../../../config";

function SvgComponent({
  width = 47,
  height = 53,
  color = cssVariables.colors.semiGrey,
}) {
  if (color !== cssVariables.colors.semiGrey) {
    color = cssVariables.colors.white;
  }
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 47 53"
    >
      <G transform="translate(-1069 -577)" fill={color}>
        <Rect width={20} height={20} rx={4} transform="translate(1069 577)" />
        <Rect width={20} height={20} rx={4} transform="translate(1069 610)" />
        <Rect width={20} height={20} rx={4} transform="translate(1096 577)" />
        <Rect width={20} height={20} rx={4} transform="translate(1096 610)" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
