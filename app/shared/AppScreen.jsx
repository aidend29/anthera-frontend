import React from "react";
import {
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

import { cssVariables, verticalScale } from "../../config";

function AppScreen({ children, style }) {
  if (Platform.OS === "ios") {
    return (
      <SafeAreaView style={[styles.safeArea, style]}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  } else {
    return (
      <>
        <StatusBar
          backgroundColor={cssVariables.colors.backgroundColor}
          barStyle="dark-content"
          translucent={true}
        />
        <View style={[styles.safeArea, styles.android, style]}>
          <View style={styles.container}>{children}</View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  android: {
    paddingTop: StatusBar.currentHeight + verticalScale(10),
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: cssVariables.screenMaxWidth,
  },
});

export default AppScreen;
