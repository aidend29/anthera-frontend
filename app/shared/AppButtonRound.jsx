import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  appStyles,
  cssVariables,
  moderateScale,
  verticalScale,
} from "../../config";
import { View } from "react-native-animatable";
function AppButtonRound({
  go = "next",
  icon = "chevron-right",
  color = "white",
  style,
  visible = true,
  ...otherProps
}) {
  if (!visible) {
    return <></>;
  }
  if (go == "next") {
    return (
      <TouchableOpacity {...otherProps}>
        <View style={[styles.container, styles.btn, style]}>
          <Feather
            name="chevron-right"
            color={cssVariables.colors.primary}
            size={moderateScale(65)}
          />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity {...otherProps}>
        <View style={[styles.container, styles.btn, style]}>
          <Feather
            name="chevron-left"
            color={cssVariables.colors.secondary}
            size={moderateScale(55)}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: cssVariables.colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: moderateScale(1),
    },
    borderRadius: 40,
    shadowOpacity: 0.2,
    shadowRadius: 3.22,
    elevation: 2,
    margin: moderateScale(10),
  },
  btn: {},
});
export default AppButtonRound;
