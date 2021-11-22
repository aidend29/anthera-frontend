import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

import LogoSvg from "../assets/svg/LogoSvg";
import { moderateScale, cssVariables } from "../../config";

export default () => {
  const zoomOut = {
    0: {
      opacity: 1,
    },
    0.25: {
      opacity: 0.6,
    },
    0.5: {
      opacity: 0.2,
    },
    0.75: {
      opacity: 0.6,
    },
    1: {
      opacity: 1,
    },
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: cssVariables.colors.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animatable.View animation="fadeIn" duration={1000} style={{ right: 20 }}>
        <LogoSvg width={moderateScale(50)} height={moderateScale(50)} />
      </Animatable.View>
    </View>
  );
};
