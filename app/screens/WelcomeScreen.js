import React from "react";
import * as Animatable from "react-native-animatable";
import { Text, StyleSheet, View } from "react-native";

import LogoSvg from "../assets/svg/LogoSvg";
import BackgroundDec01Svg from "../assets/svg/BackgroundDec01Svg";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View>
        <BackgroundDec01Svg width={149} height={249} />
      </View>
    </View>
  );
}

//25ABF7 | FFC1F5
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default WelcomeScreen;
