import React from "react";
import { Image, Dimensions, View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

import LogoSvg from "../assets/svg/LogoSvg";

const { height, width } = Dimensions.get("screen");

function SplashScreen(props) {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation={zoomOut}
        easing="ease-out"
        duration={2000}
        iterationCount="infinite"
        style={styles.wrap}
      >
        <LogoSvg width={width / 6} height={200} />
      </Animatable.View>
    </View>
  );
}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  wrap: {
    right: 20,
  },
});

export default SplashScreen;
