import React from "react";
import { Platform, StatusBar, SafeAreaView, StyleSheet } from "react-native";
import config from "../../config/configStyle";

function AppScreen({ children, style }) {
  if (Platform.OS === "ios") {
    return (
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={[styles.screen, styles.screenAndroid, style]}>
        <StatusBar
          backgroundColor={config().colors.white}
          barStyle="dark-content"
        ></StatusBar>
        {children}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  screenAndroid: {
    bottom: StatusBar.currentHeight,
  },
});

export default AppScreen;
