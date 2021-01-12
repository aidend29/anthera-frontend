import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import { styleVariables, moderateScale } from "../../config";

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
}) {
  const [close, setClose] = useState(false);
  const [text, setText] = useState("");
  const [errorDisplay, setErrorDisplay] = useState(false);

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
          color={styleVariables().colors.midGrey}
          size={25}
        />
        <TextInput
          autoCompleteType="off"
          autoCapitalize={autoCapitalize}
          secureTextEntry={secText}
          value={text}
          onChangeText={(text) => {
            setText(text);
            text.length > 0 ? setClose(true) : setClose(false);
            onChangeText(text);
          }}
          onBlur={onBlur}
          placeholder={placeholder}
          style={styles.textInput}
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
              color={styleVariables().colors.midGrey}
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
    borderRadius: moderateScale(30),
    paddingHorizontal: moderateScale(18),
    borderWidth: moderateScale(1),
    borderColor: styleVariables().colors.lightGrey,
    backgroundColor: styleVariables().colors.lightGrey,
  },
  textInput: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(12),
    flex: 1,
    color: styleVariables().colors.darkGrey,
    fontSize: styleVariables().fontSize.text,
    fontFamily: styleVariables().fontFamily.openSansRegular,
  },
  icon: {
    paddingVertical: moderateScale(12),
  },
  errorMsg: {
    color: "red",
    fontFamily: styleVariables().fontFamily.openSansRegular,
    fontSize: styleVariables().fontSize.text,
  },
});
export default AppInputField;
