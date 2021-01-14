import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import { appStyles, cssVariables, moderateScale } from "../../config";

function AppButton({
  text,
  onPress,
  textCol = cssVariables.colors.white,
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
        { backgroundColor: cssVariables.colors[backgroundCol] },
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
        <Text
          style={[appStyles.btnText, styles.buttonText, { color: textCol }]}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: cssVariables.colors.secondary,
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
    color: cssVariables.colors.white,
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(32),
  },
  spinner: {
    color: cssVariables.colors.white,
    fontSize: cssVariables.fontSize.button,
    fontFamily: cssVariables.fontFamily.OpenSansBold,
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(32),
  },
});
export default AppButton;
