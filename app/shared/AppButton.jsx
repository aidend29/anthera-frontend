import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  MaterialCommunityIcons,
  EvilIcons,
  AntDesign,
} from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import config from "../../config/configStyle";

function AppButton({
  text,
  onPress,
  textCol = config().colors.white,
  backgroundCol = "secondary",
  style = {},
  hasFrontIcon = false,
  frontIconName = "facebook",
  frontIconsize = 24,
  frontIconColor = "white",
  onPressOut,
  isLoading = false,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: config().colors[backgroundCol] },
        style,
      ]}
      onPress={onPress}
    >
      {hasFrontIcon && (
        <MaterialCommunityIcons
          name={frontIconName}
          color={frontIconColor}
          size={frontIconsize}
        />
      )}
      {isLoading && (
        <Animatable.View
          style={styles.spinner}
          animation="rotate"
          easing="ease-in-sine"
          iterationCount="infinite"
        >
          <AntDesign name="loading1" size={22} color="white" />
        </Animatable.View>
      )}
      {!isLoading && (
        <Text style={[styles.buttonText, { color: textCol }]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: config().colors.secondary,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.22,

    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: config().colors.white,
    fontSize: config().fontSize.button,
    fontFamily: config().fontFamily.OpenSansBold,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  spinner: {
    color: config().colors.white,
    fontSize: config().fontSize.button,
    fontFamily: config().fontFamily.OpenSansBold,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
});
export default AppButton;
