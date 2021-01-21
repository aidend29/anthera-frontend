import React from "react";
import { StyleSheet } from "react-native";

import AppInputField from "./AppInputField";
import { cssVariables, verticalScale, moderateScale } from "../../config";
function AppInputLine({ onChangeText, style, ...otherProps }) {
  onSearchImmediateTextChange = () => {};
  return (
    <AppInputField
      {...otherProps}
      style={[styles.container, style]}
      textStyle={styles.text}
      icon={null}
      onChangeText={(text) => {
        onChangeText(text);
      }}
      apiCallOnTextChange={() => {}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: moderateScale(1),
    backgroundColor: cssVariables.colors.white,
    borderColor: cssVariables.colors.secondary,
    paddingHorizontal: verticalScale(0),
  },
  text: {
    paddingVertical: moderateScale(4),
    paddingTop: moderateScale(4),
  },
});

export default AppInputLine;
