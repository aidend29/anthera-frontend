import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import config from "../../config/configStyle";

import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

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
  return (
    <>
      {errorMsg && touched && <Text style={styles.errorMsg}>{errorMsg}</Text>}
      <View style={[styles.container, style]}>
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          color={config().colors.midGrey}
          size={25}
        />
        <TextInput
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
              }}
              style={styles.icon}
              name="close-circle-sharp"
              size={24}
              color={config().colors.midGrey}
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
    borderRadius: 30,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: config().colors.lightGrey,
    backgroundColor: config().colors.lightGrey,
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    flex: 1,
    color: config().colors.darkGrey,
    fontSize: config().fontSize.text,
    fontFamily: config().fontFamily.openSansRegular,
  },
  icon: {
    paddingVertical: 12,
  },
  errorMsg: {
    color: "red",
    fontFamily: config().fontFamily.openSansRegular,
    fontSize: config().fontSize.text,
  },
});
export default AppInputField;
