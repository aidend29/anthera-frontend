import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { FontAwesome5 } from "@expo/vector-icons";

import { cssVariables, appStyles, moderateScale } from "../../config";
import { useEffect } from "react/cjs/react.development";

function AppError({ msg, style, ...otherProps }) {
  return (
    <>
      {msg && (
        <Animatable.View
          animation="shake"
          duration={1000}
          style={styles.container}
        >
          <FontAwesome5
            name="exclamation-circle"
            size={moderateScale(14)}
            color="#FA4545"
            style={styles.icon}
          />
          <View style={styles.errorWrapper}>
            <Text style={[appStyles.text, styles.errorText]}>{msg}</Text>
          </View>
        </Animatable.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffe6e6",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: moderateScale(12),
    borderRadius: moderateScale(5),
  },
  icon: {
    paddingHorizontal: moderateScale(5),
    paddingLeft: moderateScale(10),
  },
  errorWrapper: {
    backgroundColor: "red",
    flexDirection: "row",
    borderRadius: moderateScale(30),
    backgroundColor: "#ffe6f0",
  },
  errorText: {
    color: "#FA4545",
    flex: 1,
    marginHorizontal: moderateScale(5),
    marginVertical: moderateScale(6),
  },
});
export default AppError;
