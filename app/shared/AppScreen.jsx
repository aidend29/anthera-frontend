import React from "react";
import {
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  StyleSheet,
} from "react-native";
import config from "../../config";

function AppScreen({ children, style }) {
  if (Platform.OS === "ios") {
    return (
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    );
  } else {
    return <View style={[styles.screenAndroid, style]}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
  },
  screenAndroid: {
    top: StatusBar.currentHeight - StatusBar.currentHeight / 6,
  },
});

export default AppScreen;
