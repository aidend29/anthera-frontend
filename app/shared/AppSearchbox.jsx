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
      styleContainer={{ backgroundColor: cssVariables.colors.lightGrey }}
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

export default AppSearchbox;
