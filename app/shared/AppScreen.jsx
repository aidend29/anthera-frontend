import React from "react";
import {
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  StyleSheet,
} from "react-native";
import config from "../../config";
import { cssVariables } from "../../config";

function AppScreen({ children, style }) {
  if (Platform.OS === "ios") {
    return (
      <>
        <SafeAreaView></SafeAreaView>
        {children}
      </>
    );
  } else {
    return (
      <>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          translucent={true}
        />
        {children}
      </>
    );
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
