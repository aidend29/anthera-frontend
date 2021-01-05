import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import cssVariables from "../../config/configStyle.js";

function AppButton({
  text,
  onPress,
  textCol = config.colors.white,
  backgroundCol = config.colors.primary,
  style = {},
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: config.colors["secondary"] },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textCol }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const config = cssVariables();

const styles = StyleSheet.create({
  button: {
    backgroundColor: config.colors.secondary,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.22,

    elevation: 3,
  },
  buttonText: {
    color: config.colors.white,
    fontSize: 20,
    fontFamily: config.fontFamily.OpenSansSemiBold,
    paddingVertical: 10,
    paddingHorizontal: 32,
  },
});
export default AppButton;
