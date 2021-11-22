import React from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";

import { moderateScale, verticalScale, cssVariables } from "../../config";

function AppTabScreen({ children, style }) {
  return (
    <View style={styles.container}>
      <View style={[styles.main, style]}>{children}</View>
      <View style={styles.banner}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: cssVariables.colors.backgroundColor,
  },
  main: {
    marginTop: verticalScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    backgroundColor: "grey",
    height: moderateScale(65),
    width: "100%",
    marginBottom: Platform.OS === "ios" ? verticalScale(30) : verticalScale(0),
  },
});

export default AppTabScreen;
