import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import {
  appStyles,
  cssVariables,
  moderateScale,
  verticalScale,
} from "../../config";
import AppError from "./AppError";

function AppInputField_({
  styleContainer,
  styleText,
  styleIcon,
  icon = "email",
  errorMsg = null,
  touched,
  onChangeText,
  onClear,
  ...otherProps
}) {
  const [currentText, setCurrentText] = useState("");
  const [displayCloseBtn, setDisplayCloseBtn] = useState(false);
  const [dsiplayError, setDisplayError] = useState(false);
  const [showPasword, setShowPasword] = useState(false);

  useEffect(() => {
    setShowPasword(otherProps["secureTextEntry"]);
  }, []);

  useEffect(() => {
    if (errorMsg && touched) {
      console.log(errorMsg);
      setDisplayError(errorMsg);
    } else {
      setDisplayError(false);
    }
  });

  const handleDisplayingClearBtn = () => {
    if (displayCloseBtn) {
      return (
        <Animatable.View animation="fadeIn" duration={1000}>
          <TouchableOpacity
            onPress={() => {
              setCurrentText("");
              setDisplayCloseBtn(false);
              onClear();
            }}
          >
            <Ionicons
              name="close-circle-sharp"
              color={cssVariables.colors.secondary}
              size={moderateScale(20)}
              style={[styles.icon, styleIcon]}
            />
          </TouchableOpacity>
        </Animatable.View>
      );
    }
  };

  const handleDisplayingIcon = () => {
    if (icon)
      return (
        <MaterialCommunityIcons
          name={icon}
          color={cssVariables.colors.primary}
          style={[styles.icon, styleIcon]}
          size={moderateScale(20)}
        />
      );
  };

  const handleDisplayingError = () => {
    if (errorMsg && touched)
      return <AppError visible={true} msg={dsiplayError} />;
  };

  const handleDisplayingPasswordVisibility = () => {
    const iconNme = showPasword ? "eye-off" : "eye";
    if (otherProps["secureTextEntry"]) {
      return (
        <Animatable.View animation="fadeIn" duration={1000}>
          <TouchableOpacity
            onPress={() => {
              setShowPasword(!showPasword);
            }}
          >
            <Ionicons
              name={iconNme}
              size={24}
              color={cssVariables.colors.secondary}
              style={[styles.icon, styleIcon]}
            />
          </TouchableOpacity>
        </Animatable.View>
      );
    }
  };

  return (
    <>
      <Animatable.View
        style={[styles.textWrappper, styleContainer]}
        animation="fadeIn"
        duration={1000}
      >
        {/* //FRONT ICON */}
        {handleDisplayingIcon()}
        {/* //TEXT INPUT */}
        <TextInput
          keyboardType="default"
          autoCapitalize="none"
          blurOnSubmit={false}
          onSubmitEditing={() => Keyboard.dismiss()}
          textContentType="oneTimeCode"
          {...otherProps}
          secureTextEntry={showPasword}
          value={currentText}
          onChangeText={(text) => {
            onChangeText(text);
            setCurrentText(text);
            text.length > 0
              ? setDisplayCloseBtn(true)
              : setDisplayCloseBtn(false);
          }}
          style={[appStyles.text, styles.text, styleText]}
        />
        {handleDisplayingPasswordVisibility()}
        {/* //CLEAR BUTTON */}
        {handleDisplayingClearBtn()}
      </Animatable.View>
      {handleDisplayingError()}
    </>
  );
}

const styles = StyleSheet.create({
  textWrappper: {
    backgroundColor: cssVariables.colors.lightGrey,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(6),
    marginVertical: verticalScale(5),
  },
  text: {
    flex: 1,
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(12),
  },
  icon: {
    marginHorizontal: moderateScale(8),
  },
  errorWrapper: {
    backgroundColor: "red",
    flexDirection: "row",
    borderRadius: moderateScale(6),
    backgroundColor: "#ffe6f0",
  },
  errorText: {
    color: "#ff0066",
    flex: 1,
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(4),
  },
});
export default AppInputField_;
