import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgComponent({ width, height }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 30"
    >
      <G transform="translate(-179 -482)">
        <Circle
          cx={15}
          cy={15}
          r={15}
          transform="translate(179 482)"
          fill="#2170fc"
        />
        <Path
          d="M185.917 496.632l7.663 8.871-2.612-8.871zM202.947 496.632l-7.664 8.871 2.613-8.871z"
          fill="#fddd4d"
          stroke="#fddd4d"
        />
        <Path
          d="M191.548 496.632h5.826l-2.874 9.77z"
          fill="#f9a70a"
          stroke="#f9a70a"
        />
        <Path
          d="M191.764 495.897l2.745-3.438 2.725 3.438z"
          fill="#fddd4d"
          stroke="#fddd4d"
        />
        <Path
          d="M198.233 495.897l2.366-2.963 2.348 2.963zM185.976 495.897l2.366-2.963 2.348 2.963z"
          fill="#f9a70a"
          stroke="#f9a70a"
        />
        <Path
          d="M193.413 492.594l-2.366 2.963-2.348-2.963zM200.223 492.594l-2.366 2.963-2.348-2.963z"
          fill="#fbc52b"
          stroke="#fbc52b"
        />
        <Path
          d="M186.966 491.686s.7.144 1.025-.952c0 0 .118.962.912.952 0 0-.733-.01-.939.946 0 0-.251-.9-1-.946z"
          fill="#fddd4d"
        />
        <Path
          d="M189.349 491.778s.383.078.556-.517c0 0 .064.523.5.517 0 0-.4-.006-.51.514 0 0-.145-.5-.542-.514z"
          fill="#f9a70a"
        />
        <Path
          d="M186.625 493.125s.394.08.573-.532c0 0 .066.538.51.532 0 0-.41-.006-.525.529a.623.623 0 00-.558-.529z"
          fill="#fbc52b"
        />
        <G transform="translate(-26 7)">
          <Circle
            cx={6}
            cy={6}
            r={6}
            transform="translate(225 493)"
            fill="#fff"
          />
          <Path fill="#2170fc" d="M228 499h6v.5h-6z" />
          <Path fill="#2170fc" d="M231.25 496.25v6h-.5v-6z" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
