import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import AppInputField from "./AppInputField";
import { cssVariables, verticalScale, moderateScale } from "../../config";
function AppSearchbox({
  onSearchTextChange,
  apiCallOnTextChange,
  ...otherProps
}) {
  const [text, setText] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (text) {
        if (apiCallOnTextChange) {
          apiCallOnTextChange(text);
        }
        console.log("CALLED API");
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [text]);

  return (
    <AppInputField
      {...otherProps}
      onClear={() => {
        otherProps["onClear"];
      }}
      icon="magnify"
      onChangeText={(text) => {
        setText(text);
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
