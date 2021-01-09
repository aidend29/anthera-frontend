import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import config from "../../config/configStyle";

function AppButton({
  text,
  onPress,
  textCol = config().colors.white,
  backgroundCol = config().colors.primary,
  style = {},
  hasFrontIcon = false,
  frontIconName = "facebook",
  frontIconsize = 24,
  frontIconColor = "white",
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: config().colors["secondary"] },
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
      <Text style={[styles.buttonText, { color: textCol }]}>{text}</Text>
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
});
export default AppButton;
