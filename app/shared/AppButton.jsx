import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import { styleVariables, moderateScale } from "../../config";

function AppButton({
  text,
  onPress,
  textCol = styleVariables().colors.white,
  backgroundCol = "secondary",
  style = {},
  hasFrontIcon = false,
  frontIconName = "facebook",
  frontIconsize = moderateScale(24),
  frontIconColor = "white",
  isLoading = false,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: styleVariables().colors[backgroundCol] },
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
          <AntDesign name="loading1" size={moderateScale(18)} color="white" />
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
    backgroundColor: styleVariables().colors.secondary,
    borderRadius: moderateScale(25),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: moderateScale(1),
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.22,

    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: styleVariables().colors.white,
    fontSize: styleVariables().fontSize.text,
    fontFamily: styleVariables().fontFamily.OpenSansBold,
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(32),
  },
  spinner: {
    color: styleVariables().colors.white,
    fontSize: styleVariables().fontSize.button,
    fontFamily: styleVariables().fontFamily.OpenSansBold,
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(32),
  },
});
export default AppButton;
