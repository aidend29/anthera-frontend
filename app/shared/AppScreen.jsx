import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";

function AppScreen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});

export default AppScreen;
