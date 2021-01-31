import React, { useRef } from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

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
  displayButtonDone = false,
  ...otherProps
}) {
  let displayButtonDoneStyle = displayButtonDone ? styles._container : {};
  let opacity = useRef(1);
  if (!visible) {
    return <></>;
  }
  if (go == "next") {
    return (
      <TouchableOpacity {...otherProps} style={{ opacity: opacity.current }}>
        <View
          style={[styles.container, displayButtonDoneStyle, styles.btn, style]}
        >
          {!displayButtonDone && (
            <Feather
              name="chevron-right"
              color={cssVariables.colors.primary}
              size={moderateScale(58)}
            />
          )}
          {displayButtonDone && (
            <Animatable.View animation="pulse" iterationCount="infinite">
              <Feather
                name="check"
                color={cssVariables.colors.white}
                size={moderateScale(58)}
              />
            </Animatable.View>
          )}
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
            size={moderateScale(48)}
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
    borderRadius: moderateScale(40),
    shadowOpacity: 0.2,
    shadowRadius: 3.22,
    elevation: 1,
    margin: moderateScale(10),
  },
  _container: {
    backgroundColor: cssVariables.colors.primary,
  },
});
export default AppButtonRound;
