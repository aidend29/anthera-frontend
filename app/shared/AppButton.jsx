import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import {
  appStyles,
  cssVariables,
  moderateScale,
  verticalScale,
} from "../../config";
import { color } from "react-native-reanimated";

function AppButton({
  title,
  styleBackground,
  styleForeground,
  stylePrimary,
  displayLoading = false,
  ...otherProps
}) {
  const handleDisplayingLoading = () => {
    if (displayLoading) {
      return (
        <Animatable.View
          animation="rotate"
          easing="ease-in-sine"
          iterationCount="infinite"
          style={styles.btnTitle}
        >
          <AntDesign name="loading1" size={moderateScale(16)} color="white" />
        </Animatable.View>
      );
    } else {
      return (
        <Text
          style={[
            appStyles.btnText,
            styles.btnTitle,
            primaryStyle.btnTitle,
            styleForeground,
          ]}
        >
          {title}
        </Text>
      );
    }
  };

  let primaryStyle = {};

  if (stylePrimary)
    primaryStyle = {
      btnWrapper: { backgroundColor: cssVariables.colors.primary },
      btnTitle: { color: cssVariables.colors.white },
    };

  return (
    <TouchableOpacity
      {...otherProps}
      style={[styles.btnWrapper, primaryStyle.btnWrapper, styleBackground]}
    >
      {handleDisplayingLoading()}
    </TouchableOpacity>
    // <TouchableOpacity
    //   style={[
    //     styles.button,
    //     { backgroundColor: cssVariables.colors[backgroundCol] },
    //     style,
    //   ]}
    //   onPress={onPress}
    // >
    //   {hasFrontIcon && (
    //     <MaterialCommunityIcons
    //       name={frontIconName}
    //       color={frontIconColor}
    //       size={frontIconsize}
    //     />
    //   )}
    //   {isLoading && (
    //     <Animatable.View
    //       style={styles.spinner}
    //       animation="rotate"
    //       easing="ease-in-sine"
    //       iterationCount="infinite"
    //     >
    //       <AntDesign name="loading1" size={moderateScale(13)} color="white" />
    //     </Animatable.View>
    //   )}
    //   {!isLoading && (
    //     <Text
    //       style={[appStyles.btnText, styles.buttonText, { color: textCol }]}
    //     >
    //       {text}
    //     </Text>
    //   )}
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: cssVariables.colors.secondary,
    borderRadius: verticalScale(25),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: verticalScale(1),
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.22,

    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: cssVariables.colors.primary,
    paddingVertical: verticalScale(10),
    paddingHorizontal: verticalScale(32),
  },
  spinner: {
    color: cssVariables.colors.white,
    fontSize: cssVariables.fontSize.button,
    fontFamily: cssVariables.fontFamily.OpenSansBold,
    paddingVertical: verticalScale(12),
    paddingHorizontal: verticalScale(32),
  },

  btnWrapper: {
    borderRadius: moderateScale(30),
    backgroundColor: cssVariables.colors.secondaryLightest,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: verticalScale(1),
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.22,

    elevation: 2,
    width: moderateScale(140),
    height: moderateScale(44),

    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: cssVariables.colors.primary,
  },
});
export default AppButton;
