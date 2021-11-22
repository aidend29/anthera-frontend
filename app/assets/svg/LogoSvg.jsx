import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { cssVariables } from "../../../config";

function SvgComponent({ width = 65.718, height = 67.937, color }) {
  const colorScheme = {
    primary: cssVariables.colors.white,
    secondary: cssVariables.colors.white,
    mid: cssVariables.colors.white,
  };

  if (color === "default") {
    colorScheme.primary = cssVariables.colors.primary;
    colorScheme.secondary = cssVariables.colors.secondarMid;
    colorScheme.mid = cssVariables.colors.primaryMid;
  } else {
    if (color !== cssVariables.colors.primary) {
      colorScheme.primary = cssVariables.colors.semiGrey;
      colorScheme.mid = cssVariables.colors.semiGrey;
      colorScheme.secondary = cssVariables.colors.semiGrey;
    }
  }

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 65.718 67.937"
    >
      <Path
        d="M24.528 40.494l-.487 17.856-15.4 9.587 8.943-7.691zM23.365 12.562L17.265 0l25.347 7.563-11.732 7.96z"
        fill={colorScheme.secondary}
      />
      <Path
        d="M8.638 67.937l15.899-27.214-7.169 20.683z"
        fill={colorScheme.primary}
      />
      <Path
        d="M24.121 54.28l30.386-16.444-25.93-6.443-4.456 9.594z"
        fill={colorScheme.primary}
      />
      <Path d="M28.135 32.977l.683-22.74L0 6.21z" fill={colorScheme.primary} />
      <Path
        d="M42.567 7.483c.916 1.049 12.144 30.387 12.144 30.387L30.589 15.158z"
        fill={colorScheme.secondary}
      />
      <Path
        d="M54.602 37.908L28.764 10.193l-.839 22.6z"
        fill={colorScheme.mid}
      />
      <Path
        d="M61.689 24.888l4.025 12.532-8.7-4.28z"
        fill={colorScheme.secondary}
      />
      <Path
        d="M50.584 27.281l11.228-2.391-7.237 13.015"
        fill={colorScheme.primary}
      />
    </Svg>
  );
}

export default SvgComponent;
