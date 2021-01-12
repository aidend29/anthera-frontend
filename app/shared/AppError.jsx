import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { FontAwesome5 } from "@expo/vector-icons";

import { styleVariables, moderateScale } from "../../config";

function AppError({ error, visible, style, ...otherProps }) {
  return (
    <>
      {visible && (
        <Animatable.View
          nimation="shake"
          duration={1000}
          style={styles.container}
        >
          <FontAwesome5
            name="exclamation-circle"
            size={moderateScale(22)}
            color="#FA4545"
            style={styles.icon}
          />
          <Text a style={[styles.errorMsg, style]}>
            {error}
          </Text>
        </Animatable.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: moderateScale(25),
    backgroundColor: "#ffe6e6",
    marginVertical: moderateScale(10),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: moderateScale(30),
    paddingLeft: moderateScale(10),
    paddingVertical: moderateScale(10),
  },
  icon: {
    paddingRight: moderateScale(10),
  },
  errorMsg: {
    color: "#FA4545",
    fontFamily: styleVariables().fontFamily.OpenSansSemiBold,
    fontSize: styleVariables().fontSize.text,
    paddingRight: moderateScale(8),
  },
});
export default AppError;
