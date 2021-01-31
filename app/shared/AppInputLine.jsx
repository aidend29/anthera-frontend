import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppInputField from "./AppInputField";
import {
  cssVariables,
  verticalScale,
  moderateScale,
  appStyles,
} from "../../config";
function AppInputLine({
  onChangeText,
  style,
  styleText,
  showLetterCounter = true,
  maxLength = 156,
  onClear = null,
  ...otherProps
}) {
  const [currentTextLength, setCurrentTextLength] = useState("0");
  onSearchImmediateTextChange = () => {};

  const handleDisplayingTextLength = () => {
    if (showLetterCounter)
      return (
        <Text
          style={[
            appStyles.smText,
            { color: cssVariables.colors.secondary },
            styles.counter,
          ]}
        >
          {currentTextLength}
          <Text>/{maxLength}</Text>
        </Text>
      );
  };

  return (
    <>
      <AppInputField
        maxLength={maxLength}
        {...otherProps}
        styleContainer={[styles.container, style]}
        styleText={[styles.text, styleText]}
        styleIcon={styles.icon}
        icon={null}
        onClear={() => {
          if (onClear) onClear();
          setCurrentTextLength("0");
        }}
        onChangeText={(text) => {
          onChangeText(text);
          setCurrentTextLength(text.length);
        }}
        apiCallOnTextChange={() => {}}
      />
      {handleDisplayingTextLength()}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: moderateScale(1),
    backgroundColor: cssVariables.colors.backgroundColor,
    borderColor: cssVariables.colors.secondary,
    paddingHorizontal: verticalScale(10),
  },
  text: {
    paddingVertical: moderateScale(4),
    paddingHorizontal: 0,
    paddingTop: moderateScale(4),
  },
  icon: {
    marginHorizontal: 0,
  },
  counter: {
    alignSelf: "flex-end",
    marginBottom: verticalScale(20),
  },
});

export default AppInputLine;
