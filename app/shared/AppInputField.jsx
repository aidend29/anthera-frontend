import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import {
  cssVariables,
  moderateScale,
  appStyles,
  verticalScale,
} from "../../config";

import { useEffect } from "react";

import AppError from "./AppError";

function AppInputField({
  secText,
  placeholder,
  style,
  icon = "email",
  onChangeText,
  errorMsg,
  touched,
  onBlur,
  autoCapitalize,
  apiCallOnTextChange = null,
}) {
  const [close, setClose] = useState(false);
  const [text, setText] = useState("");
  const [errorDisplay, setErrorDisplay] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (text) {
        apiCallOnTextChange(text);
        console.log("CALLED API");
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [text]);

  useEffect(() => {
    if (errorMsg && touched) {
      setErrorDisplay(errorMsg);
    } else {
      setErrorDisplay(false);
    }
  });

  return (
    <>
      <AppError error={errorDisplay} visible={errorDisplay} />
      <View style={[styles.container, style]}>
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          color={cssVariables.colors.midGrey}
          size={25}
        />
        <TextInput
          placeholderTextColor={cssVariables.colors.semiGrey}
          autoCompleteType="off"
          autoCapitalize={autoCapitalize}
          secureTextEntry={secText}
          value={text}
          onChangeText={(text) => {
            setText(text);
            text.length > 0 ? setClose(true) : setClose(false);
            onChangeText(text);

            // clearTimeout(timeout);
            // const timeout = setTimeout(() => {
            //   console.log("time finished");
            // }, 5000);
          }}
          onBlur={onBlur}
          placeholder={placeholder}
          style={[appStyles.text, styles.textInput]}
        />

        {close && (
          <Animatable.View animation="fadeIn" duration={1000}>
            <Ionicons
              onPress={() => {
                setText("");
                setClose(false);
                onChangeText("");
                touched = false;
              }}
              style={styles.icon}
              name="close-circle-sharp"
              size={24}
              color={cssVariables.colors.midGrey}
            />
          </Animatable.View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: verticalScale(30),
    paddingHorizontal: verticalScale(14),
    borderWidth: verticalScale(1),
    borderColor: cssVariables.colors.lightGrey,
    backgroundColor: cssVariables.colors.lightGrey,
  },
  textInput: {
    paddingHorizontal: verticalScale(10),
    paddingVertical: verticalScale(12),
    flex: 1,
    fontFamily: cssVariables.fontFamily.medium,
  },
  icon: {
    paddingTop: verticalScale(12),
  },
  errorMsg: {
    color: "red",
    fontFamily: cssVariables.fontFamily.openSansRegular,
    fontSize: cssVariables.fontSize.text,
  },
});
export default AppInputField;
