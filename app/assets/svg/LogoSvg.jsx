import * as React from "react";
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";

function LogoSvg({ width, height }, props) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 182 182"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M181 13.652l-20.222 13.673 3.521 9.33-20.412 88.562 9.278 7.476-9.107 47.413-.171.894v-1.332L104.918 80.39 1 89.562l41.753-34.505-23.66-8.05L78.474 8.475l57.801 18.978L150.845 1 181 13.652z"
        fill="url(#prefix__paint0_radial)"
      />
      <Path
        d="M160.778 27.325l-.19.129L150.845 1m9.933 26.325L181 13.652 150.845 1m9.933 26.325l3.521 9.33m-3.521-9.33L150.845 1m0 0l-14.57 26.454m0 0l28.024 9.201m-28.024-9.201l-57.8-18.978m85.824 28.179l-57.526 45.431-1.855-1.696m59.381-43.735l-20.412 88.562m20.412-88.562l-91.856 3.064m32.475 40.671L60.845 40.105m44.073 40.285L1 89.562l41.753-34.505m62.165 25.333l11.134 24.124M104.918 80.39l38.969 99.278M60.845 40.105L42.753 55.058m18.092-14.953l11.598-.386m-29.69 15.338l-23.66-8.05L78.474 8.475m0 0l-6.03 31.243m71.443 85.498l-27.835-20.703m27.835 20.703l9.278 7.476-9.107 47.413m-28.006-75.592l27.835 49.457v25.697m0 0V181l.171-.894m-.171-.438l.171.438"
        stroke="#fff"
        strokeWidth={0.5}
      />
      <Defs>
        <RadialGradient
          id="prefix__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(48.61312 63.81823 -208.7741 159.0323 123.19 58.273)"
        >
          <Stop stopColor="#FFC1F5" />
          <Stop offset={1} stopColor="#25ABF7" />
          <Stop offset={1} stopColor="#2BACF7" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default LogoSvg;
