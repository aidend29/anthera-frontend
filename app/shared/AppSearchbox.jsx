import React from "react";
import { StyleSheet } from "react-native";

import AppInputField from "./AppInputField";
import { cssVariables, verticalScale, moderateScale } from "../../config";
function AppSearchbox({
  onSearchTextChange,
  onSearchImmediateTextChange,
  ...otherProps
}) {
  onSearchImmediateTextChange = () => {};
  return (
    <AppInputField
      {...otherProps}
      style={styles.container}
      icon="magnify"
      onChangeText={(text) => {
        onSearchImmediateTextChange(text);
      }}
      apiCallOnTextChange={(text) => {
        onSearchTextChange(text);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(10),
  },
});

export default AppSearchbox;
