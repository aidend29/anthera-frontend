import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons, AntDesign, Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { BoxShadow } from "react-native-shadow";

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
      btnWrapper: {
        backgroundColor: cssVariables.colors.primary,
      },
      btnTitle: { color: cssVariables.colors.white },
    };

  return (
    <View style={styleBackground}>
      <BoxShadow
        setting={{
          width: moderateScale(140),
          height: moderateScale(44),
          color: "#000",
          border: moderateScale(16),
          radius: 20,
          opacity: 0.04,
          x: moderateScale(0),
          y: moderateScale(0),
          style: { marginVertical: 5 },
        }}
      >
        <TouchableOpacity
          {...otherProps}
          style={[styles.btnWrapper, primaryStyle.btnWrapper]}
        >
          {handleDisplayingLoading()}
        </TouchableOpacity>
      </BoxShadow>
    </View>
  );
}

const styles = StyleSheet.create({
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
